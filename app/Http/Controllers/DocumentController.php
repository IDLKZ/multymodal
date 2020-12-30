<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Image;
use App\Repositories\DocumentRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class DocumentController extends AppBaseController
{
    /** @var  DocumentRepository */
    private $documentRepository;

    public function __construct(DocumentRepository $documentRepo)
    {
        $this->documentRepository = $documentRepo;
    }

    /**
     * Display a listing of the Document.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $documents = $this->documentRepository->all();

        return view('documents.index')
            ->with('documents', $documents);
    }

    /**
     * Show the form for creating a new Document.
     *
     * @return Response
     */
    public function create()
    {
        return view('documents.create');
    }

    /**
     * Store a newly created Document in storage.
     *
     * @param CreateDocumentRequest $request
     *
     * @return Response
     */
    public function store(CreateDocumentRequest $request)
    {
        $input = $request->all();
        $input["file"] = Image::createFile($request,"file",$request->title);
        $document = $this->documentRepository->create($input);

        Flash::success('Успешно создано.');

        return redirect(route('documents.index'));
    }

    /**
     * Display the specified Document.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $document = $this->documentRepository->find($id);

        if (empty($document)) {
            Flash::error('Не найдено');

            return redirect(route('documents.index'));
        }

        return view('documents.show')->with('document', $document);
    }

    /**
     * Show the form for editing the specified Document.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $document = $this->documentRepository->find($id);

        if (empty($document)) {
            Flash::error('Не найдено');

            return redirect(route('documents.index'));
        }

        return view('documents.edit')->with('document', $document);
    }

    /**
     * Update the specified Document in storage.
     *
     * @param int $id
     * @param UpdateDocumentRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateDocumentRequest $request)
    {
        $document = $this->documentRepository->find($id);

        if (empty($document)) {
            Flash::error('Не найдено');

            return redirect(route('documents.index'));
        }
        $input = $request->all();
        $input["file"] = Image::createFile($request,"file",$input["title"],$document->file);
        $document = $this->documentRepository->update($input, $id);

        Flash::success('Успешно обновлено');

        return redirect(route('documents.index'));
    }

    /**
     * Remove the specified Document from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $document = $this->documentRepository->find($id);

        if (empty($document)) {
            Flash::error('Не найдено');

            return redirect(route('documents.index'));
        }
        (new Image())->deleteFile($document->file);
        $this->documentRepository->delete($id);

        Flash::success('Успешно удалено.');

        return redirect(route('documents.index'));
    }
}
