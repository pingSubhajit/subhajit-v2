'use client'

import Logo from '@/components/Logo'
import BurgerButton from '@/components/hamburger/BurgerButton'
import Magnetic from '@/components/utilities/Magnetic'
import {useEffect, useRef, useState} from 'react'
import {usePathname} from 'next/navigation'
import useResponsive from '@/hooks/useResponsive'

const Header = () => {
	const {isMobile} = useResponsive()

	const header = useRef(null)
	const [isActive, setIsActive] = useState(false)
	const pathname = usePathname()

	useEffect( () => {
		if(isActive) setIsActive(false)
	}, [pathname])
	
	return (
		<div ref={header} className="p-9 absolute z-[90] top-0 flex justify-between items-center w-full">
			<Logo/>

			<div>
				{!isMobile && <div className="flex items-center">
					<Magnetic>
						<div className="flex flex-col relative z-10 p-4 cursor-pointer group text-white">
							<a>Works</a>
							<div className="absolute w-2.5 h-2.5 top-11 left-[50%] bg-white rounded-full transform-[translateX(-50%)] scale-0
					group-hover:scale-100 transition-[transform_0.2s_cubic-bezier(0.76,0,0.24,1)]"></div>
						</div>
					</Magnetic>

					<Magnetic>
						<div className="flex flex-col relative z-10 p-4 cursor-pointer group text-white">
							<a>About</a>
							<div className="absolute w-2.5 h-2.5 top-11 left-[50%] bg-white rounded-full transform-[translateX(-50%)] scale-0
					group-hover:scale-100 transition-[transform_0.2s_cubic-bezier(0.76,0,0.24,1)]"></div>
						</div>
					</Magnetic>

					<Magnetic>
						<div className="flex flex-col relative z-10 p-4 cursor-pointer group text-white">
							<a>Contact</a>
							<div className="absolute w-2.5 h-2.5 top-11 left-[50%] bg-white rounded-full transform-[translateX(-50%)] scale-0
					group-hover:scale-100 transition-[transform_0.2s_cubic-bezier(0.76,0,0.24,1)]"></div>
						</div>
					</Magnetic>
				</div>}

				<div>
					<BurgerButton />
				</div>
			</div>
		</div>
	)
}

export default Header
