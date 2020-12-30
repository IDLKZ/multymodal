<!-- Img Field -->
<div class="form-group col-sm-6">
    {!! Form::label('img', 'Изображение:') !!}
    {!! Form::file('img', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Сохранить', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('parallaxes.index') }}" class="btn btn-secondary">Отмена</a>
</div>
