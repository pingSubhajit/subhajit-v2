'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const opacity = {
	initial: {
		opacity: 0
	},

	enter: {
		opacity: 0.75,
		transition: {duration: 1, delay: 0.2}
	},
}

const slideUp = {
	initial: {
		top: 0
	},
	exit: {
		top: '-100vh',
		transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
	}
}

const words = ['प्रणाम', 'নমস্কার', 'Bonjour', 'Hola', 'Ciao', 'やあ', 'Hello']

export default function Preloader() {
	const [index, setIndex] = useState(0)
	const [dimension, setDimension] = useState({width: 0, height:0})

	useEffect( () => {
		setDimension({width: window.innerWidth, height: window.innerHeight})
	}, [])

	useEffect( () => {
		if(index == words.length - 1) return
		setTimeout( () => {
			setIndex(index + 1)
		}, index == 0 ? 1000 : 150)
	}, [index])

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

	const curve = {
		initial: {
			d: initialPath,
			transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
		},
		exit: {
			d: targetPath,
			transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
		}
	}

	return (
		<motion.div variants={slideUp} initial="initial" exit="exit" className="h-screen w-screen flex justify-center items-center fixed z-[100] bg-black">
			{dimension.width > 0 &&
                <>
                	<motion.p variants={opacity} initial="initial" animate="enter" className="flex text-white text-5xl items-center absolute z-10">
                		<span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
                		{words[index]}
                	</motion.p>
                	<svg className="absolute top-0 w-full h-[calc(100%+300px)]">
                		<motion.path className="fill-black" variants={curve} initial="initial" exit="exit"></motion.path>
                	</svg>
                </>
			}
		</motion.div>
	)
}
