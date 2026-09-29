import Header from './components/sections/Header/Header';

import { navItems } from '../data/navItems';
import { navBottomItems } from '../data/navBottom';

import './scss/App.scss';
import Hero from './components/sections/Hero/Hero';

function App() {
	return (
		<>
			<Header navItems={navItems} navBottom={navBottomItems} />
			<main className='main'>
				<Hero />
			</main>
		</>
	);
}

export default App;
