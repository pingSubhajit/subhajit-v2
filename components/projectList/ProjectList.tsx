'use client'

import {useRef, useState} from 'react'
import ProjectCard from '@/components/projectList/ProjectCard'
import Modal from '@/components/projectList/ProjectModal'

export type Project = {
	title: string,
	type: string,
	src: string,
	color: string
}

const projects: Project[] = [
	{
		title: 'POKENAME',
		type: 'Design & Development',
		src: 'pokename.png',
		color: '#000000'
	},
	{
		title: 'MOBILEHUB',
		type: 'Design & Frontend Development',
		src: 'wbbmc.png',
		color: '#8C8C8C'
	},
	{
		title: 'SCRAPY',
		type: 'Design & Development',
		src: 'scrapy.png',
		color: '#EFE8D3'
	},
	{
		title: 'KAYSHEN',
		type: 'Design & Development',
		src: 'wbtsk.png',
		color: '#706D63'
	}
]

const ProjectList = () => {
	const [modal, setModal] = useState({active: false, index: 0})
	const list = useRef(null)

	return (
		<div className="flex h-screen justify-center relative z-50" ref={list}>
			<div className="w-[1400px] flex flex-col items-center justify-center">
				{
					projects.map( (project, index) => {
						return <ProjectCard index={index} title={project.title} type={project.type} setModal={setModal} key={index}/>
					})
				}
			</div>
			<Modal modal={modal} projects={projects} list={list}/>
		</div>
	)
}

export default ProjectList
