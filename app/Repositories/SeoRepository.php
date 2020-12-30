<?php

namespace App\Repositories;

use App\Models\Seo;
use App\Repositories\BaseRepository;

/**
 * Class SeoRepository
 * @package App\Repositories
 * @version December 30, 2020, 7:38 am UTC
*/

class SeoRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'title',
        'keywords',
        'description',
        'author'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Seo::class;
    }
}
