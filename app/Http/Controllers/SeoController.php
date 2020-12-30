<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSeoRequest;
use App\Http\Requests\UpdateSeoRequest;
use App\Models\Seo;
use App\Repositories\SeoRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class SeoController extends AppBaseController
{
    /** @var  SeoRepository */
    private $seoRepository;

    public function __construct(SeoRepository $seoRepo)
    {
        $this->seoRepository = $seoRepo;
    }

    /**
     * Display a listing of the Seo.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $seos = $this->seoRepository->all();

        return view('seos.index')
            ->with('seos', $seos);
    }

    /**
     * Show the form for creating a new Seo.
     *
     * @return Response
     */
    public function create()
    {
        return view('seos.create');
    }

    /**
     * Store a newly created Seo in storage.
     *
     * @param CreateSeoRequest $request
     *
     * @return Response
     */
    public function store(CreateSeoRequest $request)
    {
        $input = $request->all();
        $keys = Seo::all();
        $seo = $this->seoRepository->create($input);
        if ($keys->isNotEmpty()){Seo::destroy($keys->pluck("id")->toArray());}
        Flash::success('Успешно сохранено.');

        return redirect(route('seos.index'));
    }

    /**
     * Display the specified Seo.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $seo = $this->seoRepository->find($id);

        if (empty($seo)) {
            Flash::error('Не найдено');

            return redirect(route('seos.index'));
        }

        return view('seos.show')->with('seo', $seo);
    }

    /**
     * Show the form for editing the specified Seo.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $seo = $this->seoRepository->find($id);

        if (empty($seo)) {
            Flash::error('Ничего не найдено');

            return redirect(route('seos.index'));
        }

        return view('seos.edit')->with('seo', $seo);
    }

    /**
     * Update the specified Seo in storage.
     *
     * @param int $id
     * @param UpdateSeoRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateSeoRequest $request)
    {
        $seo = $this->seoRepository->find($id);

        if (empty($seo)) {
            Flash::error('Не найдено');

            return redirect(route('seos.index'));
        }

        $seo = $this->seoRepository->update($request->all(), $id);

        Flash::success('Обновлено.');

        return redirect(route('seos.index'));
    }

    /**
     * Remove the specified Seo from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $seo = $this->seoRepository->find($id);

        if (empty($seo)) {
            Flash::error('Не найдено');

            return redirect(route('seos.index'));
        }

        $this->seoRepository->delete($id);

        Flash::success('Успешно удалено.');

        return redirect(route('seos.index'));
    }
}
