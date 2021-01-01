<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Заголовок:') !!}
    {!! Form::text('title', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Subtitle Field -->
<div class="form-group col-sm-6">
    {!! Form::label('subtitle', 'Подзаголовок:') !!}
    {!! Form::text('subtitle', null, ['class' => 'form-control','maxlength' => 500,'maxlength' => 500]) !!}
</div>

<!-- Section Field -->
<div class="form-group col-sm-6">
    {!! Form::label('section', 'Секция:') !!}
    {!! Form::select('section',\App\Models\Section::pluck("title","id"), null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('headings.index') }}" class="btn btn-secondary">Cancel</a>
</div>
