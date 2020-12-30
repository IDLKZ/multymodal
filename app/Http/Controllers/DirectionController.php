<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDirectionRequest;
use App\Http\Requests\UpdateDirectionRequest;
use App\Models\Image;
use App\Repositories\DirectionRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class DirectionController extends AppBaseController
{
    /** @var  DirectionRepository */
    private $directionRepository;

    public function __construct(DirectionRepository $directionRepo)
    {
        $this->directionRepository = $directionRepo;
    }

    /**
     * Display a listing of the Direction.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $directions = $this->directionRepository->all();

        return view('directions.index')
            ->with('directions', $directions);
    }

    /**
     * Show the form for creating a new Direction.
     *
     * @return Response
     */
    public function create()
    {
        return view('directions.create');
    }

    /**
     * Store a newly created Direction in storage.
     *
     * @param CreateDirectionRequest $request
     *
     * @return Response
     */
    public function store(CreateDirectionRequest $request)
    {
        $input = $request->all();
        $input["img"] = Image::createFile($request,"img",$input["title"]);
        $direction = $this->directionRepository->create($input);

        Flash::success('Успешно создано.');

        return redirect(route('directions.index'));
    }

    /**
     * Display the specified Direction.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $direction = $this->directionRepository->find($id);

        if (empty($direction)) {
            Flash::error('Не найдено');

            return redirect(route('directions.index'));
        }

        return view('directions.show')->with('direction', $direction);
    }

    /**
     * Show the form for editing the specified Direction.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $direction = $this->directionRepository->find($id);

        if (empty($direction)) {
            Flash::error('Не найдено');

            return redirect(route('directions.index'));
        }

        return view('directions.edit')->with('direction', $direction);
    }

    /**
     * Update the specified Direction in storage.
     *
     * @param int $id
     * @param UpdateDirectionRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateDirectionRequest $request)
    {
        $direction = $this->directionRepository->find($id);

        if (empty($direction)) {
            Flash::error('Не найдено');

            return redirect(route('directions.index'));
        }
        $input = $request->all();
        $input["img"] = Image::createFile($request,"img",$input["title"],$direction->img);
        $direction = $this->directionRepository->update($input, $id);

        Flash::success('Успешно обновлено.');

        return redirect(route('directions.index'));
    }

    /**
     * Remove the specified Direction from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $direction = $this->directionRepository->find($id);

        if (empty($direction)) {
            Flash::error('Не найдено');

            return redirect(route('directions.index'));
        }
        (new Image())->deleteFile($direction->img);
        $this->directionRepository->delete($id);

        Flash::success('Успешно удалено.');

        return redirect(route('directions.index'));
    }
}
