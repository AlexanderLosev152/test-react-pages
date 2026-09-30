import Header from './components/sections/Header/Header';

import {navItems} from '../data/navItems';
import {navBottomItems} from '../data/navBottom';
import {heroContent} from '../data/heroContent';
import {heroSlider} from '../data/heroSlider';

import './scss/App.scss';
import Hero from './components/sections/Hero/Hero';

function App() {
	return (
		<>
			<Header navItems={navItems} navBottom={navBottomItems}/>
			<main className="main">
				<Hero heroContent={heroContent} heroSlider={heroSlider}/>
			</main>
		</>
	);
}

export default App;
