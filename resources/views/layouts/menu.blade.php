<li class="nav-item {{ Request::is('seos*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('seos.index') }}">
        <i class="fas fa-search"></i>
        <span>Мета теги</span>
    </a>
</li>
<li class="nav-item {{ Request::is('headers*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('headers.index') }}">
        <i class="fas fa-map"></i>
        <span>Шапка</span>
    </a>
</li>
<li class="nav-item {{ Request::is('headings*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('headings.index') }}">
        <i class="fas fa-heading"></i>
        <span>Заголовки</span>
    </a>
</li>
<li class="nav-item {{ Request::is('parallaxes*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('parallaxes.index') }}">
        <i class="fas fa-image"></i>
        <span>Изображение</span>
    </a>
</li>
<li class="nav-item {{ Request::is('directions*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('directions.index') }}">
        <i class="fas fa-map-marker"></i>
        <span>Направления</span>
    </a>
</li>
<li class="nav-item {{ Request::is('managers*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('managers.index') }}">
        <i class="fas fa-users"></i>
        <span>Руководство</span>
    </a>
</li>
<li class="nav-item {{ Request::is('partners*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('partners.index') }}">
        <i class="fas fa-handshake"></i>
        <span>Партнеры</span>
    </a>
</li>
<li class="nav-item {{ Request::is('documents*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('documents.index') }}">
        <i class="fas fa-file"></i>
        <span>Документы</span>
    </a>
</li>
<li class="nav-item {{ Request::is('addresses*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('addresses.index') }}">
        <i class="fas fa-globe"></i>
        <span>Адрес</span>
    </a>
</li>
<li class="nav-item {{ Request::is('phones*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('phones.index') }}">
        <i class="fas fa-phone"></i>
        <span>Телефон</span>
    </a>
</li>
<li class="nav-item {{ Request::is('times*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('times.index') }}">
        <i class="fas fa-clock"></i>
        <span>Время работы</span>
    </a>
</li>
<li class="nav-item {{ Request::is('emails*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('emails.index') }}">
        <i class="fas fa-envelope"></i>
        <span>Почта</span>
    </a>
</li>
<li class="nav-item {{ Request::is('posts*') ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('posts.index') }}">
        <i class="fas fa-envelope-open-text"></i>
        <span>Почта</span>
    </a>
</li>
