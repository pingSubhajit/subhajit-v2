'use client'

import {AnimatePresence} from 'framer-motion'
import {useEffect, useState} from 'react'
import Preloader from '@/components/Preloader'

const PreloaderProvider = () => {
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect( () => {
		(
			async () => {
				setTimeout( () => {
					setIsLoading(false)
					document.body.style.cursor = 'default'
					window.scrollTo(0,0)
				}, 2000)
			}
		)()
	}, [])
	
	return (
		<AnimatePresence mode='wait'>
			{isLoading && <Preloader />}
		</AnimatePresence>
	)
}

export default PreloaderProvider
