<div class="table-responsive-sm">
    <table class="table table-striped" id="partners-table">
        <thead>
            <tr>
                <th>Изображение</th>
        <th>Ссылка</th>
                <th colspan="3">Действия</th>
            </tr>
        </thead>
        <tbody>
        @foreach($partners as $partner)
            <tr>
                <td><img src="{{ $partner->img }}" width="75" height="75"/></td>
            <td>{{ $partner->link }}</td>
                <td>
                    {!! Form::open(['route' => ['partners.destroy', $partner->id], 'method' => 'delete']) !!}
                    <div class='btn-group'>
                        <a href="{{ route('partners.show', [$partner->id]) }}" class='btn btn-ghost-success'><i class="fa fa-eye"></i></a>
                        <a href="{{ route('partners.edit', [$partner->id]) }}" class='btn btn-ghost-info'><i class="fa fa-edit"></i></a>
                        {!! Form::button('<i class="fa fa-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-ghost-danger', 'onclick' => "return confirm('Вы уверены?')"]) !!}
                    </div>
                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
