'use client'

// import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion'
import {useEffect, useRef} from 'react'
import { slideUp, opacity } from '@/components/description/animation'
import Magnetic from '@/components/utilities/Magnetic'
import Parallax from '@/components/utilities/Parallax'
import Button from '@/components/Button'

export default function Description() {
	const phrase = 'Designing and developing purpose driven, robust, creative, beautiful and functional web applications for organizations small and big since 2021. My creations are used by thousands in diverse industries.'
	const description = useRef(null)
	const isInView = useInView(description)

	return (
		<div ref={description} className="px-[200px] flex justify-center">
			<div className="max-w-[1400px] flex gap-[50px] text-black">
				<p className="text-4xl gap-2 leading-[1.3]">
					{phrase.split(' ').map((word, index) => {
						return <span key={index} className="mr-2 relative overflow-hidden inline-flex">
							<motion.span custom={index} variants={slideUp} animate={isInView ? 'open' : 'closed'}
										 key={index}>
								{word}
							</motion.span>
						</span>
					})}
				</p>
				<motion.p variants={opacity} animate={isInView ? 'open' : 'closed'} className="text-lg w-[80%]">
					An India based full stack developer dedicated creating comprehensive, user-centric web applications
					using research-driven methodologies.

					<Parallax speed={0.5}>
						<Button className="mt-20 w-44 aspect-square bg-black text-beige
							rounded-full flex items-center justify-center cursor-pointer whitespace-nowrap">
							<p>About me</p>
						</Button>
					</Parallax>
				</motion.p>
			</div>
		</div>
	)
}
