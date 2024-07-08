<?php

namespace App\Http\Controllers;

use \App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $q = $request->input('query');
        $user = User::query()->latest()->select()->where(function (Builder $subQuery) use ($q) {
            $subQuery->where('name', 'like', '%' . $q . '%')
                ->orWhere('surname', 'like', '%' . $q . '%');
        })->paginate(8, ["*"], "page");
        return response()->json($user);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }


    public function store(Request $request)
    {
        $email = $request->input("email");
        if (User::where("email", $email)->exists()) {
            return response()->json(['message' => "Email already exists", 'data' => null], 400);
        }

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
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'birthDate' => 'required',
            'telephone' => 'required',
            'cep' => 'required',
            'street' => 'required',
            'city' => 'required',
            'state' => 'required',
        ]);
    }
}
