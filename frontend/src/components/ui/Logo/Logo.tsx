import { Link } from 'react-router-dom';

import LOGO from '/images/logo.png';

import styles from './style.module.scss';

export default function Logo() {
	return (
		<Link className={styles.logo} to='#'>
			<img src={LOGO} alt='demm' />
		</Link>
	);
}
