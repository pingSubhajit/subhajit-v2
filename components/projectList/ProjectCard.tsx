'use client'

import React from 'react'
import Image from 'next/image'
import useResponsive from '@/hooks/useResponsive'

const ProjectCard = (
	{index, title, type, src, color, setModal}:
	{index: number, title: string, type: string, src: string, color: string, setModal: (modal: {active: boolean, index: number}) => void}
) => {
	const {isTablet, isMobile} = useResponsive()
	
	return (
		<div
			onMouseEnter={() => {
				setModal({active: true, index})
			}} onMouseLeave={() => {
				setModal({active: false, index})
			}}
			className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-4 py-8 lg:py-14
			xl:py-16 2xl:py-20 px-8 lg:px-20 xl:px-24 border-t-[1px] border-ghidorah cursor-pointer transition-all duration-200
			last-of-type:border-b-[1px] hover:opacity-50 group text-black"
		>
			{(isTablet || isMobile) && <div className="aspect-square mb-8 w-full bg-ghidorah overflow-hidden pointer-events-none
			flex items-center justify-center">
				<div className="h-full w-full">
					<div className="h-full w-full flex items-center justify-center" style={{backgroundColor: color}}>
						<Image
							src={`/images/${src}`}
							width={300}
							height={0}
							alt="image"
							className="h-auto w-[80%] lg:w-auto"
						/>
					</div>
				</div>
			</div>}
			<h2 className="text-5xl md:text-8xl lg:text-7xl xl:text-8xl transition-all duration-300 group-hover:translate-x-[-10px]">{title}</h2>
			<p className="text-xl transition-all duration-300 group-hover:translate-x-[10px]">{type}</p>
		</div>

	)

}

export default ProjectCard
