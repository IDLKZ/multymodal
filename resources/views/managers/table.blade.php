<div class="table-responsive-sm">
    <table class="table table-striped" id="managers-table">
        <thead>
            <tr>
                <th>ФИО</th>
        <th>Должность</th>
        <th>Изображение</th>
        <th>Описание</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($managers as $manager)
            <tr>
                <td>{{ $manager->name }}</td>
            <td>{{ $manager->job }}</td>
            <td>  <img src="{{ $manager->img }}" width="75" height="75"/></td>
            <td>{{ $manager->description }}</td>
                <td>
                    {!! Form::open(['route' => ['managers.destroy', $manager->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('managers.show', [$manager->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('managers.edit', [$manager->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
