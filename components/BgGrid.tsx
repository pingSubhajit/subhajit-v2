'use client'

import {useEffect, useRef} from 'react'
import gsap from 'gsap'

const BgGrid = () => {
	const gridCount = 12
	const gridContainer = useRef(null)

	useEffect(() => { // @ts-ignore
		gsap.to(gridContainer.current.children, {
			scaleY: 1,
			stagger: 0.07,
			duration: 0.5,
			ease: 'power3.inOut',
			delay: 2.5
		})
	}, [])

	return (
		<div className="absolute w-full h-full inset-0 flex justify-between grid-flow-row" ref={gridContainer}>
			{[...Array(gridCount)].map((e, index) => <div key={index} className="h-full w-36 bg-basil/5 scale-y-0 origin-top" />)}
		</div>
	)
}

export default BgGrid
