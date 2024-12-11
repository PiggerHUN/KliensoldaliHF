import './MainPage.less';
import { List } from './List';
import { NavBar } from './NavBar';

// MainPage component renders the main page of the application
export function MainPage() {
    return (
        <div class="main-page">
            <NavBar/>
            <h2>Receptek:</h2>
            <div class="main-body">
                <List/>
            </div>
        </div>
    );
}