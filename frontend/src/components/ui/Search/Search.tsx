import SearchIcon from '@/components/icons/SearchIcon';
import styles from './style.module.scss';

export default function Search() {
	return (
		<form className={styles.search}>
			<input type='text' placeholder='Поиск по сайту...' />
			<button>
				<SearchIcon />
			</button>
		</form>
	);
}
