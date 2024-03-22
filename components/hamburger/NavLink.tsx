import { motion } from 'framer-motion'
import {slide, scale, NavItem} from '@/components/hamburger/Nav'
import Magnetic from '@/components/utilities/Magnetic'
import TransitionLink from '@/components/utilities/TransitionLink'
import Transitioner from '@/components/Transitioner'

export default function NavLink({data, isActive, setSelectedIndicator}: {data: NavItem & {index: number}, isActive: boolean, setSelectedIndicator: (href: string) => void}) {
	const { title, href, index} = data
	return (
		<Magnetic>
			<motion.div
				className="relative flex items-center"
				onMouseEnter={() => {setSelectedIndicator(href)}}
				custom={index}
				variants={slide}
				initial="initial"
				animate="enter"
				exit="exit"
			>
				<motion.div
					variants={scale}
					animate={isActive ? 'open' : 'closed'}
					className="w-2.5 h-2.5 bg-white rounded-full absolute -left-8">
				</motion.div>
				<TransitionLink href={href}>{title}</TransitionLink>
			</motion.div>
		</Magnetic>
	)
}