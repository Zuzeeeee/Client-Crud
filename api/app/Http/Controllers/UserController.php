<?php

namespace App\Http\Controllers;

use \App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;

class UserController extends Controller
{
    public function index()
    {
        $user = User::paginate(8, ["*"], "page");
        return response()->json($user);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function store(Request $request)
    {
        $validator = $this->validateUser();
        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages(), 'data' => null], 400);
        }

        $user = User::create($validator->validate());
        return response()->json(['message' => 'User Saved', 'data' => $user], 200);

    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, 204);
    }

    public function validateUser()
    {
        return Validator::make(request()->all(), [
            'name' => 'required|string',
            'surname' => 'required|string',
            'email' => 'required|unique:users',
            'birthDate' => 'required',
            'telephone' => 'required',
            'cep' => 'required',
            'street' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
        ]);
    }
}
