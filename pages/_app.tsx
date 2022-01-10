import '../styles/globals.css';
import "../public/fonts/FontAwesomePro/css/fontawesome.min.css";
import "../public/fonts/FontAwesomePro/css/solid.min.css";
import "../public/fonts/FontAwesomePro/css/regular.min.css";

// import type { AppProps } from 'next/app';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
					<NextNProgress
						color='#3B82F6'
						height={2}
						options={{ showSpinner: false }}
					/>
					<Component {...pageProps} />
		</>
	);
}

export default MyApp;
