import { NavBar } from "./NavBar"
import { useState } from "react"
import './SearchPage.less'

export function SearchPage() {
    let [filter, setFilter] = useState('')
    return <div>
        <NavBar/>
        <div class="search-page">
            <h2>Keresés</h2>
            <input class="form-input" type="text" placeholder="Keresés..." />
            <button onClick={(e)=>setFilter(e.currentTarget.value)}>Keresés</button>
        </div>
    </div>
}