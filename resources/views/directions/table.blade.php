<div class="table-responsive-sm">
    <table class="table table-striped" id="directions-table">
        <thead>
            <tr>
                <th>Наименование</th>
        <th>Изображение</th>
        <th>Описание</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($directions as $direction)
            <tr>
                <td>{{ $direction->title }}</td>
            <td><img src="{{ $direction->img }}" height="50" width="50"/></td>
            <td>{{ $direction->description }}</td>
                <td>
                    {!! Form::open(['route' => ['directions.destroy', $direction->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('directions.show', [$direction->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('directions.edit', [$direction->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
