<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Post
 * @package App\Models
 * @version January 1, 2021, 12:38 pm UTC
 *
 * @property string $surname
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $message
 */
class Post extends Model
{
//    use SoftDeletes;

    use HasFactory;

    public $table = 'emails';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'surname',
        'name',
        'email',
        'phone',
        'message'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'surname' => 'string',
        'name' => 'string',
        'email' => 'string',
        'phone' => 'string',
        'message' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'surname' => 'required|string|max:255',
        'name' => 'required|string|max:255',
        'email' => 'required|string|max:255',
        'phone' => 'required|string|max:255',
        'message' => 'nullable|string',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];


}
