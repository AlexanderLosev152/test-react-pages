import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { HeroContentType } from './heroContentType';
import { HeroSliderItemType } from '../../ui/HeroSlider/type';

import HeroSlider from '@/components/ui/HeroSlider/HeroSlider';

import styles from './style.module.scss';

interface HeroContentProps {
	heroContent: HeroContentType;
	heroSlider: HeroSliderItemType[];
}

export default function Hero({ heroContent, heroSlider }: HeroContentProps) {
	return (
		<section className={styles.hero}>
			<div className={styles.heroWrapper}>
				<div className={classNames(styles.heroContent, 'container')}>
					<Link className={styles.heroLink} to={heroContent.link}>
						{heroContent.titleLink}
					</Link>
					<h1 className={styles.heroTitle}>{heroContent.title}</h1>
					<p className={styles.heroDescr}>{heroContent.descr}</p>
				</div>

				<HeroSlider heroSlide={heroSlider} />
			</div>
		</section>
	);
}
