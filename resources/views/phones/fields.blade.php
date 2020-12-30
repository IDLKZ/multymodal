<!-- Phone Field -->
<div class="form-group col-sm-6">
    {!! Form::label('phone', 'Телефон:') !!}
    {!! Form::text('phone', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Создать', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('phones.index') }}" class="btn btn-secondary">Отмена</a>
</div>
