import React, {useState} from 'react'
import {motion} from 'motion/react'
import {usePathname} from 'next/navigation'
import NavLink from '@/components/hamburger/NavLink'
import NavFooter from '@/components/hamburger/NavFooter'
import Curve from '@/components/hamburger/Curve'

export const slide = {
	initial: {x: 80},
	enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
	exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
	open: {scale: 1, transition: {duration: 0.3}},
	closed: {scale: 0, transition: {duration: 0.4}}
}

export type NavItem = {
	title: string
	href: string
}

const navItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Work',
		href: '/work',
	},
	{
		title: 'About',
		href: '/about',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
]

export default function Nav() {
	const pathname = usePathname()
	const [selectedIndicator, setSelectedIndicator] = useState(pathname)

	const menuSlide = {
		initial: {x: '125%'},
		enter: {x: '0', transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
		exit: {x: '125%', transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
	}

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-screen bg-petroleum fixed right-0 top-0 text-white z-[90]"
		>
			<div className="h-full p-24 flex flex-col justify-between">
				<div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-6xl gap-3 mt-20">
					<div className="text-beige border-b-[1px] border-solid border-beige uppercase text-xs pb-1 my-10">
						<p>Navigation</p>
					</div>
					{
						navItems.map((data, index) => {
							return <NavLink
								key={index}
								data={{...data, index}}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}>
							</NavLink>
						})
					}
				</div>

				<NavFooter />
			</div>

			{/*<div className="h-full w-[100px] bg-basil absolute top-0 -translate-x-full">*/}

			{/*</div>*/}
			<Curve />
		</motion.div>
	)
}