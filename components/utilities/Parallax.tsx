'use client'

import {useWindowSize} from 'react-use'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Parallax = (
	{ className, children, speed = 1, id = 'parallax' }: {className?: string, children: React.ReactNode, speed?: number, id?: string}
) => {
	const trigger = useRef(null)
	const target = useRef(null)
	const timeline = useRef(null)
	const { width: windowWidth } = useWindowSize()

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const y = windowWidth * speed * 0.1
		const setY = gsap.quickSetter(target.current, 'y', 'px')

		// @ts-ignore
		timeline.current = gsap.timeline({
			scrollTrigger: {
				id: id,
				trigger: trigger.current,
				scrub: true,
				start: 'top bottom',
				end: 'bottom top',
				onUpdate: (e) => {
					setY(e.progress * y)
				},
			},
		})

		return () => { // @ts-ignore
			timeline?.current?.kill()
		}
	}, [id, speed, windowWidth])

	return (
		<div ref={trigger} className={className}>
			<div ref={target}>{children}</div>
		</div>
	)
}

export default Parallax
