<!-- Time Field -->
<div class="form-group col-sm-6">
    {!! Form::label('time', 'Время:') !!}
    {!! Form::text('time', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Сохранить', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('times.index') }}" class="btn btn-secondary">Отмена</a>
</div>
