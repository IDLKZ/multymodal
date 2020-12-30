<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class Parallax
 * @package App\Models
 * @version December 30, 2020, 9:10 am UTC
 *
 * @property string $img
 */
class Parallax extends Model
{
//    use SoftDeletes;

    use HasFactory;
    public $table = 'parallax';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'img'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'img' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'img' => 'required|image|max:2048',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];


}
