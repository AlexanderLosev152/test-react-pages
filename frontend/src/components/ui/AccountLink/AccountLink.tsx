import { Link } from 'react-router-dom';

import AcountIcon from '@/components/icons/AcountIcon';

import styles from './style.module.scss';

export default function AccountLink() {
	return (
		<Link className={styles.accountLink} to='#'>
			<AcountIcon />
			<span>Личный кабинет</span>
		</Link>
	);
}
