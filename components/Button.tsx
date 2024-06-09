'use client'

import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import Magnetic from '@/components/utilities/Magnetic'
import {cn} from '@/lib/utils'

export default function Button({children, className, backgroundColor, ...attributes}: {children: React.ReactNode, className?: string, backgroundColor?: string}) {
	const circle = useRef(null)
	let timeline = useRef(null)
	let timeoutId: string | number | NodeJS.Timeout | null | undefined = null

	useEffect(() => { // @ts-ignore
		timeline.current = gsap.timeline({paused: true}) // @ts-ignore
		timeline.current
			.to(circle.current, {top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in'}, 'enter')
			.to(circle.current, {top: '-150%', width: '125%', duration: 0.25}, 'exit')
	}, [])

	const manageMouseEnter = () => {
		if(timeoutId) clearTimeout(timeoutId) // @ts-ignore
		timeline.current.tweenFromTo('enter', 'exit')
	}

	const manageMouseLeave = () => {
		timeoutId = setTimeout( () => { // @ts-ignore
			timeline.current.play()
		}, 300)
	}

	return (
		<Magnetic>
			<div
				className={cn(
					'rounded-[3em] border-[1px_solid_rgb(136,136,136)] cursor-pointer relative flex justify-center ' +
					'items-center py-3.5 px-14 overflow-hidden group border-[1px] border-solid border-ghidorah',
					className
				)}
				// style={{overflow: "hidden"}}
				onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}}
				{...attributes}
			>
				<p className="relative z-10 transition-[color_0.4_linear] group-hover:text-white">{children}</p>
				<div ref={circle} className="w-full h-[150%] absolute rounded-full
				top-full bg-basil border-[1px] border-solid border-basil" style={{backgroundColor}}></div>
			</div>
		</Magnetic>
	)
}