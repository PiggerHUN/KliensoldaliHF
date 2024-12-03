import { render } from 'preact';
import './index.less';
import { MainPage } from './MainPage';



function App() {
	return <MainPage/>
}

render(<App />, document.getElementById('app'));