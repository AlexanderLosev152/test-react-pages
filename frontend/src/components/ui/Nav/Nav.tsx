import { Link } from 'react-router-dom';
import type { NavItem } from '../../../components/ui/Nav/type';

import styles from './style.module.scss';

interface NavProps {
	data: NavItem[];
}

export default function Nav({ data }: NavProps) {
	return (
		<nav>
			<ul className={styles.menu}>
				{data.map(({ id, links, title }) => (
					<li className={styles.menuLink} key={id}>
						<Link to={links}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
