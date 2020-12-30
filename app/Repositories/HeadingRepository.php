<?php

namespace App\Repositories;

use App\Models\Heading;
use App\Repositories\BaseRepository;

/**
 * Class HeadingRepository
 * @package App\Repositories
 * @version December 30, 2020, 8:17 am UTC
*/

class HeadingRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'title',
        'subtitle',
        'section'
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
        return Heading::class;
    }
}
