<div class="table-responsive-sm">
    <table class="table table-striped" id="documents-table">
        <thead>
            <tr>
                <th>Наименование</th>
        <th>Описание</th>
        <th>Тип</th>
        <th>Файл</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($documents as $document)
            <tr>
                <td>{{ $document->title }}</td>
            <td>{{ $document->description }}</td>
            <td> <i class="{{ $document->type }}"></i></td>
            <td><a href="{{ $document->file }}" download>Скачать</a></td>
                <td>
                    {!! Form::open(['route' => ['documents.destroy', $document->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('documents.show', [$document->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('documents.edit', [$document->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Are you sure?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
