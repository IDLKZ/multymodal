<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Наименование:') !!}
    {!! Form::text('title', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Description Field -->
<div class="form-group col-sm-6">
    {!! Form::label('description', 'Описание:') !!}
    {!! Form::text('description', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Type Field -->
<div class="form-group col-sm-6">
    {!! Form::label('type', 'Тип:') !!}
    {!! Form::select('type',["fas fa-file-pdf"=>"PDF","fas fa-file-word"=>"WORD","far fa-file-excel"=>"EXCEL","fas fa-file-video"=>"Видео","fas fa-file-image"=>"Изображение","fas fa-file"=>"Другое"], null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- File Field -->
<div class="form-group col-sm-6">
    {!! Form::label('file', 'Файл:') !!}
    {!! Form::file('file', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Сохранить', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('documents.index') }}" class="btn btn-secondary">Отмена</a>
</div>
