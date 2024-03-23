'use client'

import {useRef, useState} from 'react'
import ProjectCard from '@/components/projectList/ProjectCard'
import Modal from '@/components/projectList/ProjectModal'
import useResponsive from '@/hooks/useResponsive'

export type Project = {
	title: string,
	slug: string,
	type: string,
	src: string,
	color: string
}

const projects: Project[] = [
	{
		title: 'POKENAME',
		slug: 'pokename',
		type: 'Design & Development',
		src: 'pokename.png',
		color: '#000000'
	},
	{
		title: 'MOBILEHUB',
		slug: 'mobilehub',
		type: 'Design & Frontend Development',
		src: 'wbbmc.png',
		color: '#8C8C8C'
	},
	{
		title: 'SCRAPY',
		slug: 'scrapy',
		type: 'Design & Development',
		src: 'scrapy.png',
		color: '#EFE8D3'
	},
	{
		title: 'KAYSHEN',
		slug: 'kayshen',
		type: 'Design & Development',
		src: 'wbtsk.png',
		color: '#706D63'
	}
]

const ProjectList = () => {
	const [modal, setModal] = useState({active: false, index: 0})
	const {isTablet, isMobile} = useResponsive()
	const list = useRef(null)

	return (
		<div className="flex lg:h-screen justify-center relative z-50" ref={list}>
			<div className="w-[90vw] max-w-[1400px] flex flex-col items-center justify-center">
				{projects.map( (project, index) => {
					return <ProjectCard
						index={index}
						title={project.title}
						slug={project.slug}
						type={project.type}
						src={project.src}
						color={project.color}
						setModal={setModal}
						key={index}
					/>
				})}
			</div>
			{!isTablet && !isMobile && <Modal modal={modal} projects={projects} list={list}/>}
		</div>
	)
}

export default ProjectList
