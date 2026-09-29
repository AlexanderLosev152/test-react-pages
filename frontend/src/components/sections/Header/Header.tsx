import classNames from 'classnames';

import type { NavItem } from '@/components/ui/Nav/type';
import type { NavBottomItems } from '@/components/ui/NavBottom/type';

import Nav from '@/components/ui/Nav/Nav';
import AccountLink from '@/components/ui/AccountLink/AccountLink';
import Logo from '@/components/ui/Logo/Logo';
import Search from '@/components/ui/Search/Search';
import PhoneLink from '@/components/ui/PhoneLink/PhoneLink';
import RequestACall from '@/components/ui/RequestACall/RequestACall';
import NavBottom from '@/components/ui/NavBottom/NavBottom';
import BassketLink from '@/components/ui/BassketLink/BassketLink';

import styles from './style.module.scss';

interface HeaderProps {
	navItems: NavItem[];
	navBottom: NavBottomItems[];
}

export default function Header({ navItems, navBottom }: HeaderProps) {
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

			<div className={styles.headerBottom}>
				<div className={classNames(styles.headerBottom__wrapper, 'container')}>
					<NavBottom data={navBottom} />
					<BassketLink />
				</div>
			</div>
		</header>
	);
}
