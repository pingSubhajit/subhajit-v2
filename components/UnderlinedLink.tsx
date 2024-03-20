'use client'

import Magnetic from '@/components/utilities/Magnetic'
import constants from '@/constants'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'

const UnderlinedLink = ({text}: {text: string}) => {
	const link = useRef(null)
	const accent = useRef(null)

	useEffect(() => {
		// @ts-ignore
		link.current?.addEventListener('mouseenter', () => {
			gsap.to(accent.current, {scaleX: 1, duration: 0.4, ease: 'power3'})
		})

		// @ts-ignore
		link.current?.addEventListener('mouseleave', () => {
			gsap.to(accent.current, {scaleX: 0, duration: 0.4, ease: 'power3'})
		})
	}, [])

	return (
		<div ref={link}>
			<Magnetic>
				<a target="_blank" href={constants.resumeLink} className="block">
					<div className="w-[max-content] pt-6 pb-10 text-white">
						{text}
						<div ref={accent} className="w-full h-[1px] scale-x-0 rounded-full bg-white origin-center"/>
					</div>
				</a>
			</Magnetic>
		</div>
	)
}

export default UnderlinedLink
