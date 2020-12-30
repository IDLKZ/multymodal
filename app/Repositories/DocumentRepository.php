<?php

namespace App\Repositories;

use App\Models\Document;
use App\Repositories\BaseRepository;

/**
 * Class DocumentRepository
 * @package App\Repositories
 * @version December 30, 2020, 10:54 am UTC
*/

class DocumentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'title',
        'description',
        'type',
        'file'
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
        return Document::class;
    }
}
