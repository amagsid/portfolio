import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en-GB">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
						rel="stylesheet"
					/>

					<style>
						@import
						url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
						@import
						url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;800&display=swap');
						@import
						url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100&display=swap');
					</style>

					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>

					{/* raleway font */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap"
						rel="stylesheet"
					/>

					{/* poppins */}

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Raleway:wght@800&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap"
						rel="stylesheet"
					></link>

					{/* cairo */}

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&display=swap"
						rel="stylesheet"
					/>

					{/* CHIVO */}

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Chivo:wght@800&display=swap"
						rel="stylesheet"
					/>

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
