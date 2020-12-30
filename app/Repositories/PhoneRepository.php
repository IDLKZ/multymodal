<?php

namespace App\Repositories;

use App\Models\Phone;
use App\Repositories\BaseRepository;

/**
 * Class PhoneRepository
 * @package App\Repositories
 * @version December 30, 2020, 12:33 pm UTC
*/

class PhoneRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'phone'
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
        return Phone::class;
    }
}
