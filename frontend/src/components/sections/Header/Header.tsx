import classNames from 'classnames';

import type { NavItem } from '@/components/ui/Nav/type';

import Nav from '@/components/ui/Nav/Nav';

import styles from './style.module.scss';

interface HeaderProps {
	navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
	return (
		<header className={classNames(styles.header, 'container')}>
			<div className={styles.headerTop}>
				<Nav data={navItems} />
			</div>
		</header>
	);
}
