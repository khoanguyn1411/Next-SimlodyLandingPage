import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Next and MDX Blog</title>
			</Head>
			<div className='container mx-auto'>
				<main>
					<NextNProgress
						color='#3B82F6'
						height={2}
						options={{ showSpinner: false }}
					/>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}

export default MyApp;
