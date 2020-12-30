<?php

namespace App\Repositories;

use App\Models\Header;
use App\Repositories\BaseRepository;

/**
 * Class HeaderRepository
 * @package App\Repositories
 * @version December 30, 2020, 7:54 am UTC
*/

class HeaderRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'phone',
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
        return Header::class;
    }
}
