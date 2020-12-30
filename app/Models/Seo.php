<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Seo
 * @package App\Models
 * @version December 30, 2020, 7:38 am UTC
 *
 * @property string $title
 * @property string $keywords
 * @property string $description
 * @property string $author
 */
class Seo extends Model
{
//    use SoftDeletes;

    use HasFactory;

    public $table = 'seo';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'title',
        'keywords',
        'description',
        'author'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'title' => 'string',
        'keywords' => 'string',
        'description' => 'string',
        'author' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'title' => 'required|string|max:255',
        'keywords' => 'nullable|string|max:255',
        'description' => 'nullable|string|max:255',
        'author' => 'nullable|string|max:255',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];


}
