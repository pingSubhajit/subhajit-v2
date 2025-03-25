'use client'

import styles from '@/components/hamburger/BurgerButton.module.scss'
import {RefObject, useLayoutEffect, useRef, useState} from 'react'
import {AnimatePresence} from 'motion/react'
import Nav from '@/components/hamburger/Nav'
import Magnetic from '@/components/utilities/Magnetic'
import {useOnClickOutside} from 'usehooks-ts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useResponsive from '@/hooks/useResponsive'

export default function BurgerButton() {
	const [isActive, setIsActive] = useState(false)
	const {isMobile} = useResponsive()

	const menu = useRef<HTMLDivElement>(null)
	const button = useRef<HTMLDivElement>(null)
	useOnClickOutside(menu as RefObject<HTMLElement>, () => setIsActive(false))

	useLayoutEffect( () => {
		gsap.registerPlugin(ScrollTrigger)
		if (button.current) {
			gsap.to(button.current, {
				scrollTrigger: {
					trigger: document.documentElement,
					start: 0,
					end: window.innerHeight / 4,
					onLeave: () => {
						if (button.current) {
							gsap.to(button.current, {scale: 1, duration: 0.25, ease: 'power1.out'})
						}
					},
					onEnterBack: () => {
						if (button.current) {
							gsap.to(button.current, {scale: window.innerWidth <= 640 ? 1 : 0, duration: 0.25, ease: 'power1.out'})
						}
					}
				}
			})
		}
	}, [])

	return (
		<div ref={menu}>
			<div className={`fixed z-[100] right-0 scale-${!isMobile ? 0 : 1} top-0`} ref={button}>
				<Magnetic>
					<div onClick={() => {
						setIsActive(!isActive)
					}} className="relative m-5 z-[100] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full
						bg-basil cursor-pointer flex items-center justify-center">
						<div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
					</div>
				</Magnetic>
			</div>

			<AnimatePresence mode="wait">
				{isActive && <Nav/>}
			</AnimatePresence>
		</div>
	)
}