<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Manager
 * @package App\Models
 * @version December 30, 2020, 10:22 am UTC
 *
 * @property string $name
 * @property string $job
 * @property string $img
 * @property string $description
 */
class Manager extends Model
{
//    use SoftDeletes;

    use HasFactory;

    public $table = 'managers';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'name',
        'job',
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
        'name' => 'string',
        'job' => 'string',
        'img' => 'string',
        'description' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required|string|max:255',
        'job' => 'required|string|max:255',
        'img' => 'required|image|max:2048',
        'description' => 'required|string',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];


}
