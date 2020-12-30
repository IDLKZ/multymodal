<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Document
 * @package App\Models
 * @version December 30, 2020, 10:54 am UTC
 *
 * @property string $title
 * @property string $description
 * @property string $type
 * @property string $file
 */
class Document extends Model
{
//    use SoftDeletes;

    use HasFactory;

    public $table = 'documents';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'title',
        'description',
        'type',
        'file'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'title' => 'string',
        'description' => 'string',
        'type' => 'string',
        'file' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'title' => 'required|string|max:255',
        'description' => 'nullable|string|max:255',
        'type' => 'required|string|max:255',
        'file' => 'required|file|max:4096',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];


}
