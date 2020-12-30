<?php

namespace App\Repositories;

use App\Models\Manager;
use App\Repositories\BaseRepository;

/**
 * Class ManagerRepository
 * @package App\Repositories
 * @version December 30, 2020, 10:22 am UTC
*/

class ManagerRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'job',
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
        return Manager::class;
    }
}
