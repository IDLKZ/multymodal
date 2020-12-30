<!-- Title Field -->
<div class="form-group col-sm-6">
    {!! Form::label('title', 'Адрес:') !!}
    {!! Form::text('title', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Сохранить', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('addresses.index') }}" class="btn btn-secondary">Отмена</a>
</div>
