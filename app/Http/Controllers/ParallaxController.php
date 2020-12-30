<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateParallaxRequest;
use App\Http\Requests\UpdateParallaxRequest;
use App\Models\Image;
use App\Models\Parallax;
use App\Repositories\ParallaxRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class ParallaxController extends AppBaseController
{
    /** @var  ParallaxRepository */
    private $parallaxRepository;

    public function __construct(ParallaxRepository $parallaxRepo)
    {
        $this->parallaxRepository = $parallaxRepo;
    }

    /**
     * Display a listing of the Parallax.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $parallaxes = $this->parallaxRepository->all();

        return view('parallaxes.index')
            ->with('parallaxes', $parallaxes);
    }

    /**
     * Show the form for creating a new Parallax.
     *
     * @return Response
     */
    public function create()
    {
        return view('parallaxes.create');
    }

    /**
     * Store a newly created Parallax in storage.
     *
     * @param CreateParallaxRequest $request
     *
     * @return Response
     */
    public function store(CreateParallaxRequest $request)
    {
        $input = $request->all();
        $models = Parallax::first();
        $input["img"] = Image::createFile($request,"img",null);
        if($models){
            (new Image())->deleteFile($models->img);
            $models->delete();
        }

        $parallax = $this->parallaxRepository->create($input);
        Flash::success('Успешно создано.');

        return redirect(route('parallaxes.index'));
    }

    /**
     * Display the specified Parallax.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $parallax = $this->parallaxRepository->find($id);

        if (empty($parallax)) {
            Flash::error('Не найдено');

            return redirect(route('parallaxes.index'));
        }

        return view('parallaxes.show')->with('parallax', $parallax);
    }

    /**
     * Show the form for editing the specified Parallax.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $parallax = $this->parallaxRepository->find($id);

        if (empty($parallax)) {
            Flash::error('Не найдено');

            return redirect(route('parallaxes.index'));
        }

        return view('parallaxes.edit')->with('parallax', $parallax);
    }

    /**
     * Update the specified Parallax in storage.
     *
     * @param int $id
     * @param UpdateParallaxRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateParallaxRequest $request)
    {
        $parallax = $this->parallaxRepository->find($id);
        $input = $request->all();
        $input["img"] = Image::createFile($request,"img",null,$parallax->img);
        if (empty($parallax)) {
            Flash::error('Не найдено');

            return redirect(route('parallaxes.index'));
        }

        $parallax = $this->parallaxRepository->update($input, $id);

        Flash::success('Успешно обновлено.');

        return redirect(route('parallaxes.index'));
    }

    /**
     * Remove the specified Parallax from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $parallax = $this->parallaxRepository->find($id);

        if (empty($parallax)) {
            Flash::error('Не найдено');

            return redirect(route('parallaxes.index'));
        }
        (new Image())->deleteFile($parallax->img);
        $this->parallaxRepository->delete($id);

        Flash::success('Успешно удалено.');

        return redirect(route('parallaxes.index'));
    }
}
