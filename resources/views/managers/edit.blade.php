@extends('layouts.app')

@section('content')
    <ol class="breadcrumb">
          <li class="breadcrumb-item">
             <a href="{!! route('managers.index') !!}">Руковдство</a>
          </li>
          <li class="breadcrumb-item active">Изменить</li>
        </ol>
    <div class="container-fluid">
         <div class="animated fadeIn">
             @include('coreui-templates::common.errors')
             <div class="row">
                 <div class="col-lg-12">
                      <div class="card">
                          <div class="card-header">
                              <i class="fa fa-edit fa-lg"></i>
                              <strong>Изменить руководство</strong>
                          </div>
                          <div class="card-body">
                              {!! Form::model($manager, ['route' => ['managers.update', $manager->id], 'method' => 'patch',"files"=>true]) !!}

                              @include('managers.fields')

                              {!! Form::close() !!}
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    </div>
@endsection
