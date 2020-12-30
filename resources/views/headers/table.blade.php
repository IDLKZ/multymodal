<div class="table-responsive-sm">
    <table class="table table-striped" id="headers-table">
        <thead>
            <tr>
                <th>Телефон</th>
        <th>Почта</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($headers as $header)
            <tr>
                <td>{{ $header->phone }}</td>
            <td>{{ $header->email }}</td>
                <td>
                    {!! Form::open(['route' => ['headers.destroy', $header->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('headers.show', [$header->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('headers.edit', [$header->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
