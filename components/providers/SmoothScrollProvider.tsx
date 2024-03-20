'use client'

import Lenis from '@studio-freight/lenis'
import {ReactNode, useState, createContext, useContext, useLayoutEffect} from 'react'

const ScrollContext = createContext<Lenis | null>(null)

const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
	const [lenisInstance, setLenisInstance] = useState(null as Lenis | null)

	useLayoutEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true, // @ts-ignore
			smoothTouch: false,
		})

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
		setLenisInstance(lenis)
	}, [])

	return (
		<ScrollContext.Provider value={lenisInstance}>
			{children}
		</ScrollContext.Provider>
	)
}

export default SmoothScrollProvider

export const useSmoothScroll = () => {
	const context = useContext(ScrollContext)

	if (!context) {
		throw new Error('useSmoothScroll must be used within a SmoothScrollProvider')
	}

	return context
}
