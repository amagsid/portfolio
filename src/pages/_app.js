import Theme from '../styles/theme';
import '../styles/GlobalComponents/buttons.scss';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
