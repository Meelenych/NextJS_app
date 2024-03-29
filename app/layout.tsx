import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'E-Store',
	description: 'Easy purchases',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			data-theme='winter'>
			<body className={inter.className}>
				<CartProvider>
					<ProductProvider>
						<Header />
						<main>{children}</main>
						<Footer />
					</ProductProvider>
				</CartProvider>
			</body>
		</html>
	);
}
