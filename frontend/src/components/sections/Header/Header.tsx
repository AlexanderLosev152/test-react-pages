import classNames from 'classnames';

import type { NavItem } from '@/components/ui/Nav/type';

import Nav from '@/components/ui/Nav/Nav';
import AccountLink from '@/components/ui/AccountLink/AccountLink';
import Logo from '@/components/ui/Logo/Logo';
import Search from '@/components/ui/Search/Search';
import PhoneLink from '@/components/ui/PhoneLink/PhoneLink';
import RequestACall from '@/components/ui/RequestACall/RequestACall';

import styles from './style.module.scss';
interface HeaderProps {
	navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.headerTop}>
				<div className={classNames(styles.headerTop__wrapper, 'container')}>
					<Nav data={navItems} />
					<AccountLink />
				</div>
			</div>

			<div className={classNames(styles.headerMain, 'container')}>
				<Logo />
				<Search />
				<PhoneLink />
				<RequestACall />
			</div>
		</header>
	);
}
