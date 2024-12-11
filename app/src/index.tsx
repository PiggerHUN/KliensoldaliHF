import './index.less';
import { render } from 'preact';
import { MainPage } from './MainPage';
import { RecipeForm } from './RecipeForm';
import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';
import { SearchPage } from './SearchPage';

// Create a context to manage page state
export const PageContext = createContext<(page: string) => void>(() => {});

// Custom hook to use the PageContext
export const usePage = () => useContext(PageContext);

function App() {
    // useState hook to manage the current page state
    const [page, setPage] = useState('main');
    let Component;
    switch(page) {
        case 'main':
            Component = <MainPage/>;
            break;
        case 'new':
            Component = <RecipeForm/>;
            break;
        case 'search':
            Component = <SearchPage/>;
            break;
        default:
            Component = <MainPage/>;
            break;
    }
    return (
        <PageContext.Provider value={setPage}>
            {Component}
        </PageContext.Provider>
    );
}

// Render the App component into the DOM
render(<App />, document.getElementById('app'));