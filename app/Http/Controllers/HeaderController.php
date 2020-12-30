<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateHeaderRequest;
use App\Http\Requests\UpdateHeaderRequest;
use App\Repositories\HeaderRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class HeaderController extends AppBaseController
{
    /** @var  HeaderRepository */
    private $headerRepository;

    public function __construct(HeaderRepository $headerRepo)
    {
        $this->headerRepository = $headerRepo;
    }

    /**
     * Display a listing of the Header.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $headers = $this->headerRepository->all();

        return view('headers.index')
            ->with('headers', $headers);
    }

    /**
     * Show the form for creating a new Header.
     *
     * @return Response
     */
    public function create()
    {
        return view('headers.create');
    }

    /**
     * Store a newly created Header in storage.
     *
     * @param CreateHeaderRequest $request
     *
     * @return Response
     */
    public function store(CreateHeaderRequest $request)
    {
        $input = $request->all();

        $header = $this->headerRepository->create($input);

        Flash::success('Успешно создано.');

        return redirect(route('headers.index'));
    }

    /**
     * Display the specified Header.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $header = $this->headerRepository->find($id);

        if (empty($header)) {
            Flash::error('Не найдено');

            return redirect(route('headers.index'));
        }

        return view('headers.show')->with('header', $header);
    }

    /**
     * Show the form for editing the specified Header.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $header = $this->headerRepository->find($id);

        if (empty($header)) {
            Flash::error('Не найдено');

            return redirect(route('headers.index'));
        }

        return view('headers.edit')->with('header', $header);
    }

    /**
     * Update the specified Header in storage.
     *
     * @param int $id
     * @param UpdateHeaderRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateHeaderRequest $request)
    {
        $header = $this->headerRepository->find($id);

        if (empty($header)) {
            Flash::error('Не найдено');

            return redirect(route('headers.index'));
        }

        $header = $this->headerRepository->update($request->all(), $id);

        Flash::success('Успешно создано.');

        return redirect(route('headers.index'));
    }

    /**
     * Remove the specified Header from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $header = $this->headerRepository->find($id);

        if (empty($header)) {
            Flash::error('Не найдено');

            return redirect(route('headers.index'));
        }

        $this->headerRepository->delete($id);

        Flash::success('Успешно удалено.');

        return redirect(route('headers.index'));
    }
}
