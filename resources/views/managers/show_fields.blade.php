<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'ФИО:') !!}
    <p>{{ $manager->name }}</p>
</div>

<!-- Job Field -->
<div class="form-group">
    {!! Form::label('job', 'Должность:') !!}
    <p>{{ $manager->job }}</p>
</div>

<!-- Img Field -->
<div class="form-group">
    {!! Form::label('img', 'Изображние:') !!}
    <img src="{{ $manager->img }}" width="75" height="75"/>
</div>

<!-- Description Field -->
<div class="form-group">
    {!! Form::label('description', 'Описание:') !!}
    <p>{{ $manager->description }}</p>
</div>

