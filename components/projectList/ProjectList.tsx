'use client'

import {useRef, useState} from 'react'
import ProjectCard from '@/components/projectList/ProjectCard'
import Modal from '@/components/projectList/ProjectModal'
import useResponsive from '@/hooks/useResponsive'
import projects from '@/components/projectList/projects'

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
			{!isTablet && !isMobile && <Modal modal={modal} projects={projects} />}
		</div>
	)
}

export default ProjectList
