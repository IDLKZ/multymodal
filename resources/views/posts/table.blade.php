<div class="table-responsive-sm">
    <table class="table table-striped" id="posts-table">
        <thead>
            <tr>
                <th>Фамилия</th>
        <th>Имя</th>
        <th>Email</th>
        <th>Почта</th>
        <th>Текст сообщения</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($posts as $post)
            <tr>
                <td>{{ $post->surname }}</td>
            <td>{{ $post->name }}</td>
            <td>{{ $post->email }}</td>
            <td>{{ $post->phone }}</td>
            <td>{{ $post->message }}</td>
                <td>
                    {!! Form::open(['route' => ['posts.destroy', $post->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('posts.show', [$post->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('posts.edit', [$post->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
