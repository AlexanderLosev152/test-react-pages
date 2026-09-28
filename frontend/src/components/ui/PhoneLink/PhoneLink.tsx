import { Link } from 'react-router-dom';

import styles from './style.module.scss';

export default function PhoneLink() {
	return (
		<Link className={styles.phone} to='tel:+79999999999'>
			+7 999 999-99-99
			<span>Звоните с 8:10 до 18:10</span>
		</Link>
	);
}
