'use client'

import gsap from 'gsap'
import {useEffect, useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const MarqueeHeader = () => {
	const firstText = useRef(null)
	const secondText = useRef(null)
	const thirdText = useRef(null)
	const slider = useRef(null)

	let xPercent = 0
	let direction = -1

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: e => direction = e.direction * -1
			},
			x: '-500px',
		})
		requestAnimationFrame(animate)
	}, [])

	const animate = () => {
		if(xPercent < -100){
			xPercent = 0
		}
		else if(xPercent > 0){
			xPercent = -100
		}

		gsap.set(firstText.current, {xPercent: xPercent})
		gsap.set(secondText.current, {xPercent: xPercent})
		gsap.set(thirdText.current, {xPercent: xPercent})
		requestAnimationFrame(animate)
		xPercent += 0.1 * direction
	}
	
	return (
		<div className="relative flex overflow-hidden h-screen">
			<h1 className="sr-only">Subhajit Kundu</h1>
			<div className="absolute top-36">
				<div ref={slider} className="relative whitespace-nowrap flex items-center text-ghidorah text-8xl lg:text-9xl xl:text-[190px]">
					<p ref={firstText} className="flex items-center" aria-hidden>
						Subhajit Kundu
						<span className="w-40 h-2 bg-ghidorah rounded-3xl mt-2 ml-12 mr-12" />
					</p>
					<p ref={secondText} className="flex items-center" aria-hidden>
						Subhajit Kundu
						<span className="w-40 h-2 bg-ghidorah rounded-3xl mt-2 ml-12 mr-12" />
					</p>
					<p ref={thirdText} className="flex items-center" aria-hidden>
						Subhajit Kundu
						<span className="w-40 h-2 bg-ghidorah rounded-3xl mt-2 ml-12 mr-12" />
					</p>
				</div>
			</div>
		</div>
	)
}

export default MarqueeHeader
