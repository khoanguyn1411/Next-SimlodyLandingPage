import Head from 'next/head';
// import type { AppProps } from 'next/app';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import { Header } from '@components';
import { Footer } from '@components/footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>TungTung</title>
			</Head>
			<div>
				<Header />
				<main>
					<NextNProgress
						color='#3B82F6'
						height={2}
						options={{ showSpinner: false }}
					/>
					<Component {...pageProps} />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
