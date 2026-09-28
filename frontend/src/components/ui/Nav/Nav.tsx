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
					<li key={id}>
						<a href={links}>{title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
