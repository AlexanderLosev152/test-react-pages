import Header from './components/sections/Header/Header';

import { navItems } from '../data/navItems';

import './scss/App.scss';

function App() {
	return (
		<>
			<Header navItems={navItems} />
		</>
	);
}

export default App;
