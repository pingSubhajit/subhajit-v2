'use client'

import React from 'react'

const ProjectCard = (
	{index, title, type, setModal}:
	{index: number, title: string, type: string, setModal: (modal: {active: boolean, index: number}) => void}
) => {
	return (
		<div
			onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}
			className="flex w-full justify-between items-center py-20 px-24 border-t-[1px] border-ghidorah
			cursor-pointer transition-all duration-200 last-of-type:border-b-[1px] hover:opacity-50 group text-black"
		>
			<h2 className="text-8xl transition-all duration-300 group-hover:translate-x-[-10px]">{title}</h2>
			<p className="text-xl transition-all duration-300 group-hover:translate-x-[10px]">{type}</p>
		</div>

	)

}

export default ProjectCard
