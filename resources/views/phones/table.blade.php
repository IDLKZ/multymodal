<div class="table-responsive-sm">
    <table class="table table-striped" id="phones-table">
        <thead>
            <tr>
                <th>Телефон</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($phones as $phone)
            <tr>
                <td>{{ $phone->phone }}</td>
                <td>
                    {!! Form::open(['route' => ['phones.destroy', $phone->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('phones.show', [$phone->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('phones.edit', [$phone->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
