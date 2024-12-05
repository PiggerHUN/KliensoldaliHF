import './NavBar.less';

export function NavBar({ setPage }) {

    return <header class="navbar">
        <h1 class="navbar-title">Az Én Receptkönyvem</h1>
        <nav>
            <ul>
                <li><a href="#" onClick={() => setPage('main')}>Kezdőlap</a></li>
                <li><a href="#">Receptek</a></li>
                <li><a href="#" onClick={() => setPage('new')}>Új recept</a></li>
            </ul>
        </nav>
    </header>
}