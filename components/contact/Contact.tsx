'use client'

import styles from '@/components/contact/Contact.module.scss'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import {motion, useScroll, useTransform} from 'motion/react'
import Magnetic from '@/components/utilities/Magnetic'
import Button from '@/components/Button'

export default function Contact() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end']
	})
	const x = useTransform(scrollYProgress, [0, 1], [0, 100])
	const y = useTransform(scrollYProgress, [0, 1], [-500, 0])

	const getCurrentTime = () => {
		let currentTime = new Date()
		let currentOffset = currentTime.getTimezoneOffset()
		let ISTOffset = 330
		let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000)
		return ISTTime.toLocaleTimeString('en-US')
	}

	const [time, setTime] = useState('')
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		setTime(getCurrentTime())
		
		const interval = setInterval(() => {
			setTime(getCurrentTime())
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	
	return (
		<motion.div style={{y}} ref={container} className={styles.contact}>
			<div className={styles.body}>
				<div className={styles.title}>
					<span>
						<div className={styles.imageContainer}>
							<Image
								fill={true}
								alt={'image'}
								src={'/face.png'}
							/>
						</div>
						<h2>Let's work</h2>
					</span>
					<h2>together</h2>
					<motion.div style={{x}} className={styles.buttonContainer}>
						<Button backgroundColor='#A99A75' className={styles.button}>
							<p>Get in touch</p>
						</Button>
					</motion.div>
				</div>
				<div className={styles.nav}>
					<Button className="">subhajit@subhajit.me</Button>
					<Button>+91 79800 15886</Button>
				</div>
				<div className={styles.info}>
					<div>
						<span>
							<h3>Version</h3>
							<p>2024 © Reserved</p>
						</span>
						<span>
							<h3>LOCAL TIME</h3>
							<p>{isMounted ? `${time} GMT+5.30` : ''}</p>
						</span>
					</div>
					<div>
						<span>
							<h3>socials</h3>
							<Magnetic>
								<p>Github</p>
							</Magnetic>
						</span>
						<Magnetic>
							<p>Instagram</p>
						</Magnetic>
						<Magnetic>
							<p>Linkedin</p>
						</Magnetic>
					</div>
				</div>
			</div>
		</motion.div>
	)
}