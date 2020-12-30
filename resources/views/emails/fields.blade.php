<!-- Email Field -->
<div class="form-group col-sm-6">
    {!! Form::label('email', 'Почта:') !!}
    {!! Form::email('email', null, ['class' => 'form-control','maxlength' => 255,'maxlength' => 255]) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Сохранить', ['class' => 'btn btn-primary']) !!}
    <a href="{{ route('emails.index') }}" class="btn btn-secondary">Отмена</a>
</div>
