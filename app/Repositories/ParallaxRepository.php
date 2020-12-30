<?php

namespace App\Repositories;

use App\Models\Parallax;
use App\Repositories\BaseRepository;

/**
 * Class ParallaxRepository
 * @package App\Repositories
 * @version December 30, 2020, 9:10 am UTC
*/

class ParallaxRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'img'
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
        return Parallax::class;
    }
}
