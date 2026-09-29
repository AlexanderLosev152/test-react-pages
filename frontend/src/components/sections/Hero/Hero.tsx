import classNames from 'classnames';

import { Link } from 'react-router-dom';

import styles from './style.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroWrapper}>
				<div className={classNames(styles.heroContent, 'container')}>
					<Link className={styles.heroLink} to='#'>
						Перейти в каталог
					</Link>
					<h1 className={styles.heroTitle}>
						Изысканные смесители для вашего интерьера
					</h1>
					<p className={styles.heroDescr}>
						Гарантируем высочайшую безопасность и надёжность в соответствии c
						международными стандартами качества.
					</p>
				</div>
			</div>
		</section>
	);
}
