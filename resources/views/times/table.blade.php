<div class="table-responsive-sm">
    <table class="table table-striped" id="times-table">
        <thead>
            <tr>
                <th>Время</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($times as $time)
            <tr>
                <td>{{ $time->time }}</td>
                <td>
                    {!! Form::open(['route' => ['times.destroy', $time->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('times.show', [$time->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('times.edit', [$time->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
