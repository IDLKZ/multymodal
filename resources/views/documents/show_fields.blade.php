<!-- Title Field -->
<div class="form-group">
    {!! Form::label('title', 'Наименование:') !!}
    <p>{{ $document->title }}</p>
</div>

<!-- Description Field -->
<div class="form-group">
    {!! Form::label('description', 'Описание:') !!}
    <p>{{ $document->description }}</p>
</div>

<!-- Type Field -->
<div class="form-group">
    {!! Form::label('type', 'Тип:') !!}
    <i class="{{ $document->type }}"></i>
</div>

<!-- File Field -->
<div class="form-group">
    {!! Form::label('file', 'Файл:') !!}
    <a href="{{ $document->file }}" download>Скачать</a>
</div>

