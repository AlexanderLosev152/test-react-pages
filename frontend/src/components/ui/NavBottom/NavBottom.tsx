import type { NavBottomItems } from './type';

import { Link } from 'react-router-dom';

import styles from './style.module.scss';

interface NavBottomProps {
	data: NavBottomItems[];
}

export default function NavBottom({ data }: NavBottomProps) {
	return (
		<nav>
			<ul className={styles.navBottom}>
				{data.map(({ id, title, links }) => (
					<li key={id}>
						<Link to={links}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
