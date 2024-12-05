import './index.less';
import { render } from 'preact';
import { MainPage } from './MainPage';
import { RecipeForm } from './RecipeForm';
import { useState } from 'preact/hooks';
import { SearchPage } from './SearchPage';


function App() {
	let[page, setPage] = useState('main');
	switch(page){
		case 'main':
			return <MainPage setPage={setPage}/>
		case 'new':
			return <RecipeForm setPage={setPage}/>
		case 'search':
			return <SearchPage setPage={setPage}/>
		default:
			return <MainPage setPage={setPage}/>
	}
}

render(<App />, document.getElementById('app'));