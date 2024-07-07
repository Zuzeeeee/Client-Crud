<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'cvv', 'expiredAt', 'user_id'];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
