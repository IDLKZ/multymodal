<div class="table-responsive-sm">
    <table class="table table-striped" id="headings-table">
        <thead>
            <tr>
                <th>Заголовок</th>
        <th>Подзаголовок</th>
        <th>Секция</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($headings as $heading)
            <tr>
                <td>{{ $heading->title }}</td>
            <td>{{ $heading->subtitle }}</td>
            <td>{{ $section[$heading->section] }}</td>
                <td>
                    {!! Form::open(['route' => ['headings.destroy', $heading->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('headings.show', [$heading->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('headings.edit', [$heading->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
