<!-- Surname Field -->
<div class="form-group">
    {!! Form::label('surname', 'Фамилия:') !!}
    <p>{{ $post->surname }}</p>
</div>

<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Имя:') !!}
    <p>{{ $post->name }}</p>
</div>

<!-- Email Field -->
<div class="form-group">
    {!! Form::label('email', 'Email:') !!}
    <p>{{ $post->email }}</p>
</div>

<!-- Phone Field -->
<div class="form-group">
    {!! Form::label('phone', 'Телефон:') !!}
    <p>{{ $post->phone }}</p>
</div>

<!-- Message Field -->
<div class="form-group">
    {!! Form::label('message', 'Сообщение:') !!}
    <p>{{ $post->message }}</p>
</div>

