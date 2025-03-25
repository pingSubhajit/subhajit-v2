'use client'

import PreloaderProvider from '@/components/providers/PreloaderProvider'
import {usePathname} from 'next/navigation'
import {capitalizeFirstLetter} from '@/lib/utils'

export default function Template({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const segment = pathname.split('/').filter(Boolean).pop() || ''
	
	return (
		<div>
			<PreloaderProvider label={capitalizeFirstLetter(segment)} />

			{children}
		</div>
	)
}
