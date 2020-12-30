<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Direction
 * @package App\Models
 * @version December 30, 2020, 10:06 am UTC
 *
 * @property string $title
 * @property string $img
 * @property string $description
 */
class Direction extends Model
{
//    use SoftDeletes;

    use HasFactory;

    public $table = 'direction';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'title',
        'img',
        'description'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'title' => 'string',
        'img' => 'string',
        'description' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'title' => 'required|string|max:255',
        'img' => 'required|image|max:2048',
        'description' => 'required|string|max:500',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];


}
