<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\User;
use Validator;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $card = User::findOrFail($id)->cards()->get();
        return response()->json($card);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardRequest $request, $id)
    {

        $validator = $this->validateCard();
        if ($validator->fails() | !User::findOrFail($id)) {
            return response()->json(['message' => $validator->messages(), 'data' => null], 400);
        }

        $card = new Card($validator->validate());
        if (User::findOrFail($id)->cards()->save($card)) {
            return response()->json(['message' => 'Card Saved', 'data' => $card], 200);
        }

        return response()->json(['message' => 'Error Occured', 'data' => null], 400);
    }

    /**
     * Display the specified resource.
     */
    public function show(Card $card)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Card $card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardRequest $request, Card $card)
    {
        return response()->json(['message' => 'Success', 'data' => $card], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($cardId)
    {
        $card = Card::findOrFail($cardId);
        if ($card->delete()) {
            return response()->json(["message" => "Card Deleted"], 200);
        }
        return response()->json(["message" => "Failed on delete card"], 400);
    }

    public function validateCard()
    {
        return Validator::make(request()->all(), [
            'number' => 'required|string|min:12|max:16',
            'cvv' => 'required|string|min:3|max:3',
            'expiredAt' => 'required',
        ]);
    }
}
