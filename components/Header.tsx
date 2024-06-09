'use client'

import Logo from '@/components/Logo'
import BurgerButton from '@/components/hamburger/BurgerButton'
import Magnetic from '@/components/utilities/Magnetic'
import {useEffect, useRef, useState} from 'react'
import {usePathname} from 'next/navigation'
import useResponsive from '@/hooks/useResponsive'
import TransitionLink from '@/components/utilities/TransitionLink'
import {cn} from '@/lib/utils'

const Header = ({
	textClassName,
	decoratorClassName,
	logoClassName
}: {
	textClassName?: string,
	decoratorClassName?: string,
	logoClassName?: string
}) => {
	const {isMobile} = useResponsive()

	const header = useRef(null)
	const [isActive, setIsActive] = useState(false)
	const pathname = usePathname()

	useEffect( () => {
		if(isActive) setIsActive(false)
	}, [pathname])
	
	return (
		<div ref={header} className="p-9 absolute z-[90] top-0 flex justify-between items-center w-full">
			<TransitionLink href="/"><Logo className={logoClassName} /></TransitionLink>

			<div>
				{!isMobile && <div className="flex items-center">
					<Magnetic>
						<div className={cn('flex flex-col relative z-10 p-4 cursor-pointer group text-white', textClassName)}>
							<TransitionLink href="/work">Work</TransitionLink>
							<div className={cn('absolute w-2.5 h-2.5 top-11 left-[50%] bg-white rounded-full transform-[translateX(-50%)] scale-0 ' +
								'group-hover:scale-100 transition-[transform_0.2s_cubic-bezier(0.76,0,0.24,1)]', decoratorClassName)}/>
						</div>
					</Magnetic>

					<Magnetic>
						<div
							className={cn('flex flex-col relative z-10 p-4 cursor-pointer group text-white', textClassName)}>
							<TransitionLink href="/about">About</TransitionLink>
							<div className={cn('absolute w-2.5 h-2.5 top-11 left-[50%] bg-white rounded-full transform-[translateX(-50%)] scale-0 ' +
								'group-hover:scale-100 transition-[transform_0.2s_cubic-bezier(0.76,0,0.24,1)]', decoratorClassName)}/>
						</div>
					</Magnetic>

					<Magnetic>
						<div
							className={cn('flex flex-col relative z-10 p-4 cursor-pointer group text-white', textClassName)}>
							<TransitionLink href="/contact">Contact</TransitionLink>
							<div className={cn('absolute w-2.5 h-2.5 top-11 left-[50%] bg-white rounded-full transform-[translateX(-50%)] scale-0 ' +
								'group-hover:scale-100 transition-[transform_0.2s_cubic-bezier(0.76,0,0.24,1)]', decoratorClassName)} />
						</div>
					</Magnetic>
				</div>}

				<div>
					<BurgerButton/>
				</div>
			</div>
		</div>
	)
}

export default Header
