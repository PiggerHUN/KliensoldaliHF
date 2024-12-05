import { NavBar } from "./NavBar"
import './Search.less'

export function Search({ setPage }) {
    return <div>
        <NavBar setPage={setPage} />
        <div class="search-page">
            <h2>Keresés</h2>
            <input class="form-input" type="text" placeholder="Keresés..." />
            <button>Keresés</button>
        </div>
    </div>
}