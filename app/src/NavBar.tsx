import './NavBar.less';
import { usePage } from './index'

// NavBar component renders the navigation bar of the application
export function NavBar() {
    const setPage = usePage();

    return <header class="navbar">
        <h1 class="navbar-title">Az Én Receptkönyvem</h1>
        <nav>
            <ul>
                <li><a href="#" onClick={() => setPage('main')}>Receptek</a></li>
                <li><a href="#" onClick={() => setPage('search')}>Keresés</a></li>
                <li><a href="#" onClick={() => setPage('new')}>Új recept</a></li>
            </ul>
        </nav>
    </header>
}