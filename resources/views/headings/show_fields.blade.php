<!-- Title Field -->
<div class="form-group">
    {!! Form::label('title', 'Заголовок:') !!}
    <p>{{ $heading->title }}</p>
</div>

<!-- Subtitle Field -->
<div class="form-group">
    {!! Form::label('subtitle', 'Подзаголовок:') !!}
    <p>{{ $heading->subtitle }}</p>
</div>

<!-- Section Field -->
<div class="form-group">
    {!! Form::label('section', 'Секция:') !!}
    <p>{{ (\App\Models\Section::find($heading->section))->title }}</p>
</div>

