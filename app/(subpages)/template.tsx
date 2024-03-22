'use client'

import PreloaderProvider from '@/components/providers/PreloaderProvider'
import {useSelectedLayoutSegment} from 'next/navigation'
import {capitalizeFirstLetter} from '@/lib/utils'

export default function Template({ children }: { children: React.ReactNode }) {
	const segment = useSelectedLayoutSegment()!
	
	return (
		<div>
			<PreloaderProvider label={capitalizeFirstLetter(segment)} />

			{children}
		</div>
	)
}
