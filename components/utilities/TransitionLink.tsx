'use client'

import {usePathname, useRouter} from 'next/navigation'
import React, {ReactNode, useEffect, useRef, useState} from 'react'
import {AnimatePresence} from 'motion/react'
import Transitioner from '@/components/Transitioner'
import {createPortal} from 'react-dom'

const TransitionLink = ({children, href, className}: {children: ReactNode, href: string, className?: string}) => {
	const router = useRouter()
	const pathname = usePathname()

	const [isLoading, setIsLoading] = useState(false)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		if (pathname !== href) {
			setIsLoading(true)
			setTimeout( () => {
				router.push(href)
			}, 500)
		}
	}

	const ref = useRef<Element | DocumentFragment>(null)
	useEffect(() => {
		// @ts-ignore
		ref.current = document.getElementsByTagName('body')[0]
	}, [])

	return (
		<>
			{ref.current && createPortal(
				<AnimatePresence mode='wait'>
					{isLoading && <Transitioner />}
				</AnimatePresence>, // @ts-ignore
				ref.current
			)}

			<a href={href} onClick={handleClick} className={className}>{children}</a>
		</>
	)
}

export default TransitionLink