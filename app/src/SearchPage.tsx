import './SearchPage.less'
import { NavBar } from "./NavBar"
import { useState } from "react"
import { List } from "./List"

export function SearchPage() {
    // useState hook to manage the filter state
    const [filter, setFilter] = useState('');

    // Function to handle search reset
    const handleSearch = () => {
        setFilter('');
    }

    return <div>
        <NavBar/>
        <div class="search-page">
            <h2>Keresés</h2>
            <form class="search-form" onReset={handleSearch}>
                <div>
                    <input class="form-input" type="text" value={filter} onInput={(e)=>setFilter(e.currentTarget.value)} placeholder="Keresés..." />
                    <button type="reset">Reset</button> 
                </div>
            </form>
            <div class="search-results">
                <List filter={filter} />
            </div>
        </div>
    </div>
}