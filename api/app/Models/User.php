<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'surname', 'email', 'birthDate', 'telephone', 'cep', 'street', 'city', 'state'];


    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
