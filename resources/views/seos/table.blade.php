<div class="table-responsive-sm">
    <table class="table table-striped" id="seos-table">
        <thead>
            <tr>
                <th>Наименование</th>
        <th>Ключевые слова</th>
        <th>Описание</th>
        <th>Автор</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($seos as $seo)
            <tr>
                <td>{{ $seo->title }}</td>
            <td>{{ $seo->keywords }}</td>
            <td>{{ $seo->description }}</td>
            <td>{{ $seo->author }}</td>
                <td>
                    {!! Form::open(['route' => ['seos.destroy', $seo->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('seos.show', [$seo->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('seos.edit', [$seo->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
