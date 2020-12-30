<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateHeadingRequest;
use App\Http\Requests\UpdateHeadingRequest;
use App\Models\Heading;
use App\Models\Section;
use App\Repositories\HeadingRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class HeadingController extends AppBaseController
{
    /** @var  HeadingRepository */
    private $headingRepository;

    public function __construct(HeadingRepository $headingRepo)
    {
        $this->headingRepository = $headingRepo;
    }

    /**
     * Display a listing of the Heading.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $headings = $this->headingRepository->all();
        $section = Section::pluck("title","id")->toArray();
        return view('headings.index')
            ->with(['headings'=>$headings,"section"=>$section]);
    }

    /**
     * Show the form for creating a new Heading.
     *
     * @return Response
     */
    public function create()
    {
        return view('headings.create');
    }

    /**
     * Store a newly created Heading in storage.
     *
     * @param CreateHeadingRequest $request
     *
     * @return Response
     */
    public function store(CreateHeadingRequest $request)
    {
        $input = $request->all();
        $id = Heading::where("section",$request->get("section"))->first();
        $heading = $this->headingRepository->create($input);
        Flash::success('Заголовок успешно сохранен.');
        if ($id){Heading::destroy($id->id);}

        return redirect(route('headings.index'));
    }

    /**
     * Display the specified Heading.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $heading = $this->headingRepository->find($id);

        if (empty($heading)) {
            Flash::error('Не найдено');

            return redirect(route('headings.index'));
        }

        return view('headings.show')->with('heading', $heading);
    }

    /**
     * Show the form for editing the specified Heading.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $heading = $this->headingRepository->find($id);

        if (empty($heading)) {
            Flash::error('Не найдено');

            return redirect(route('headings.index'));
        }

        return view('headings.edit')->with('heading', $heading);
    }

    /**
     * Update the specified Heading in storage.
     *
     * @param int $id
     * @param UpdateHeadingRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateHeadingRequest $request)
    {

        $heading = $this->headingRepository->find($id);
        if (empty($heading)) {
            Flash::error('Не найдено');

            return redirect(route('headings.index'));
        }
        $other_heading = Heading::where("section",$request->get("section"))->first();

        if($other_heading){if($heading->id != $other_heading->id){$other_heading->delete();}}

        $heading = $this->headingRepository->update($request->all(), $id);


        Flash::success('Успешно обновлен.');

        return redirect(route('headings.index'));
    }

    /**
     * Remove the specified Heading from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $heading = $this->headingRepository->find($id);

        if (empty($heading)) {
            Flash::error('Не найдено');

            return redirect(route('headings.index'));
        }

        $this->headingRepository->delete($id);

        Flash::success('Успешно удален.');

        return redirect(route('headings.index'));
    }
}
