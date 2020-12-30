@extends('layouts.app')

@section('content')
     <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="{{ route('partners.index') }}">Партнеры</a>
            </li>
            <li class="breadcrumb-item active">Детали</li>
     </ol>
     <div class="container-fluid">
          <div class="animated fadeIn">
                 @include('coreui-templates::common.errors')
                 <div class="row">
                     <div class="col-lg-12">
                         <div class="card">
                             <div class="card-header">
                                 <strong>Детали</strong>
                                  <a href="{{ route('partners.index') }}" class="btn btn-light">Назад</a>
                             </div>
                             <div class="card-body">
                                 @include('partners.show_fields')
                             </div>
                         </div>
                     </div>
                 </div>
          </div>
    </div>
@endsection
