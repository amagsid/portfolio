import Theme from '../styles/theme';
import '../styles/GlobalComponents/buttons.scss';
import styles from '../components/Header/header.css';
import styles2 from '../components/HoveringBanner/Socialicons.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
