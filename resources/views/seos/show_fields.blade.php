<!-- Title Field -->
<div class="form-group">
    {!! Form::label('title', 'Наименование:') !!}
    <p>{{ $seo->title }}</p>
</div>

<!-- Keywords Field -->
<div class="form-group">
    {!! Form::label('keywords', 'Ключевые слова:') !!}
    <p>{{ $seo->keywords }}</p>
</div>

<!-- Description Field -->
<div class="form-group">
    {!! Form::label('description', 'Описание:') !!}
    <p>{{ $seo->description }}</p>
</div>

<!-- Author Field -->
<div class="form-group">
    {!! Form::label('author', 'Автор:') !!}
    <p>{{ $seo->author }}</p>
</div>

