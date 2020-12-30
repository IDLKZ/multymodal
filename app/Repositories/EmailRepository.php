<?php

namespace App\Repositories;

use App\Models\Email;
use App\Repositories\BaseRepository;

/**
 * Class EmailRepository
 * @package App\Repositories
 * @version December 30, 2020, 12:42 pm UTC
*/

class EmailRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'email'
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
        return Email::class;
    }
}
