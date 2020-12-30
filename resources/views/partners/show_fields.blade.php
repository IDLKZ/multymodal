<!-- Img Field -->
<div class="form-group">
    {!! Form::label('img', 'Изображени:') !!}
    <img src="{{ $partner->img }}" width="75" height="75"/>
</div>

<!-- Link Field -->
<div class="form-group">
    {!! Form::label('Ссылка', 'Link:') !!}
    <a href="{{ $partner->link }}">{{ $partner->link }}</a>
</div>

