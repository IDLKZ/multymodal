@extends('layouts.app')

@section('content')
    <ol class="breadcrumb">
          <li class="breadcrumb-item">
             <a href="{!! route('headers.index') !!}">Шапка</a>
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
                              <strong>Изменить</strong>
                          </div>
                          <div class="card-body">
                              {!! Form::model($header, ['route' => ['headers.update', $header->id], 'method' => 'patch']) !!}

                              @include('headers.fields')

                              {!! Form::close() !!}
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    </div>
@endsection
