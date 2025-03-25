'use client'

import {motion, useInView} from 'motion/react'
import {slideUp} from '@/components/description/animation'
import {useRef} from 'react'
import {cn} from '@/lib/utils'

const ProjectDescription = ({description, className}: {description: string, className?: string}) => {
	const descriptionElement = useRef(null)
	const isInView = useInView(descriptionElement)
	return (
		<p className={cn('text-lg xl:text-2xl 2xl:text-3xl lg:space-y-2', className)} ref={descriptionElement}>
			{description.split(' ').map((word, index) => {
				return <span key={index} className="mr-2 relative overflow-hidden inline-flex">
					<motion.span custom={index} variants={slideUp} animate={isInView ? 'open' : 'closed'} key={index}>
						{word}
					</motion.span>
				</span>
			})}
		</p>
	)
}

export default ProjectDescription
