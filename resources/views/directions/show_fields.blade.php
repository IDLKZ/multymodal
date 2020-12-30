<!-- Title Field -->
<div class="form-group">
    {!! Form::label('title', 'Наименование:') !!}
    <p>{{ $direction->title }}</p>
</div>

<!-- Img Field -->
<div class="form-group">
    {!! Form::label('img', 'Изображение:') !!}
    <img src="{{ $direction->img }}" height="50" width="50"/>
</div>

<!-- Description Field -->
<div class="form-group">
    {!! Form::label('description', 'Описание:') !!}
    <p>{{ $direction->description }}</p>
</div>

