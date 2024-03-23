'use client'

import PreloaderProvider from '@/components/providers/PreloaderProvider'
import {useSelectedLayoutSegments} from 'next/navigation'
import {capitalizeFirstLetter} from '@/lib/utils'

export default function Template({ children }: { children: React.ReactNode }) {
	const segments = useSelectedLayoutSegments()!
	
	return (
		<div>
			<PreloaderProvider label={capitalizeFirstLetter(segments[segments.length - 1])} />

			{children}
		</div>
	)
}
