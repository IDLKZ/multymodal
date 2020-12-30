<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Heading
 * @package App\Models
 * @version December 30, 2020, 8:17 am UTC
 *
 * @property string $title
 * @property string $subtitle
 * @property string $section
 */
class Heading extends Model
{
//    use SoftDeletes;

    use HasFactory;

    public $table = 'headings';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'title',
        'subtitle',
        'section'
    ];


    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'title' => 'string',
        'subtitle' => 'string',
        'section' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'title' => 'required|string|max:255',
        'subtitle' => 'nullable|string|max:255',
        'section' => 'required|string|max:255',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];

}
