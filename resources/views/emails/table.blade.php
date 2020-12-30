<div class="table-responsive-sm">
    <table class="table table-striped" id="emails-table">
        <thead>
            <tr>
                <th>Почта</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($emails as $email)
            <tr>
                <td>{{ $email->email }}</td>
                <td>
                    {!! Form::open(['route' => ['emails.destroy', $email->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('emails.show', [$email->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('emails.edit', [$email->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
