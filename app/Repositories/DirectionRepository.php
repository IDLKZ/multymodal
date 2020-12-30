<?php

namespace App\Repositories;

use App\Models\Direction;
use App\Repositories\BaseRepository;

/**
 * Class DirectionRepository
 * @package App\Repositories
 * @version December 30, 2020, 10:06 am UTC
*/

class DirectionRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'title',
        'img',
        'description'
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
        return Direction::class;
    }
}
