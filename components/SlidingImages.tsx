'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

const slider1 = [
	{
		color: '#595344',
		src: 'pokename.png'
	},
	{
		color: '#A99A75',
		src: 'wbbmc.png'
	},
	{
		color: '#E5CA85',
		src: 'scrapy.png'
	},
	{
		color: '#21201C',
		src: 'wbbmc.png'
	}
]



const slider2 = [
	{
		color: '#21201C',
		src: 'wbbmc.png'
	},
	{
		color: '#A99A75',
		src: 'pokename.png'
	},
	{
		color: '#595344',
		src: 'scrapy.png'
	},
	{
		color: '#E5CA85',
		src: 'pokename.png'
	}
]

export default function SlidingImages() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start']
	})

	const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200])
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -200])
	const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

	return (
		<div ref={container} className="flex flex-col gap-[3vw] relative pt-52 bg-white z-30">
			<motion.div style={{x: x1}} className="flex relative gap-[3vw] w-[500vw] lg:w-[120vw] lg:left[-10vw]">
				{slider1.map( (project, index) => {
					return <div key={index} className="w-[25%] h-[80vw] lg:h-[20vw] flex items-center justify-center" style={{backgroundColor: project.color}} >
						<div key={index} className="relative w-[80%] h-[80%]">
							<Image className="object-cover"
								fill={true}
								alt={'image'}
								src={`/images/${project.src}`}/>
						</div>
					</div>
				})}
			</motion.div>

			<motion.div style={{x: x2}} className="flex relative gap-[3vw] w-[500vw] lg:w-[120vw] left[-10vw]">
				{
					slider2.map( (project, index) => {
						return <div key={index} className="w-[25%] h-[80vw] lg:h-[20vw] flex items-center justify-center" style={{backgroundColor: project.color}} >
							<div key={index} className="relative w-[80%] h-[80%]">
								<Image className="object-cover"
									fill={true}
									alt={'image'}
									src={`/images/${project.src}`}/>
							</div>
						</div>
					})

				}

			</motion.div>

			<motion.div style={{height}} className="relative mt-24 lg:mt-96">
				<div className="h-[1550%] w-[120%] left-[-10%] rounded-b-[50%] bg-white z-50 absolute shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
			</motion.div>

		</div>

	)

}