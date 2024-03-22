import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import {clsx} from 'clsx'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://subhajit-v2.vercel.app/'),
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="overflow-x-hidden">
			<SmoothScrollProvider>
				<body className={clsx(rubik.className, 'bg-white')}>
					<main className="overflow-x-hidden">
						{children}
					</main>
				</body>
			</SmoothScrollProvider>
		</html>
	)
}
