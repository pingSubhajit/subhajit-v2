'use client'

import heroImage from '@/public/hero.png'
import Image from 'next/image'
import MarqueeHeader from '@/components/MarqueeHeader'
import Locator from '@/components/Locator'
import Header from '@/components/Header'
import Arrow from '@/icons/Arrow'
import Description from '@/components/description/Description'
import Parallax from '@/components/utilities/Parallax'
import ProjectList from '@/components/projectList/ProjectList'
import BgGrid from '@/components/BgGrid'
import SlidingImages from '@/components/SlidingImages'
import Contact from '@/components/contact/Contact'
import PreloaderProvider from '@/components/providers/PreloaderProvider'
import UnderlinedLink from '@/components/UnderlinedLink'

export default function Home() {
	return (
		<div>
			<PreloaderProvider />
			
			<Header />
			<section className="h-screen w-screen relative">
				<BgGrid />
				<div
					className="absolute z-10 left-0 bottom-0 right-0 pointer-events-none overflow-hidden w-full flex justify-center">
					<Image src={heroImage} alt='Subhajit image' className="min-w-[1920px]" priority/>
				</div>
				
				<div>
					<Locator className="absolute top-[55%] right-0 translate-y-[-50%]" />
				</div>

				<div className="absolute bottom-0 pl-40 z-10">
					<Parallax speed={-0.5} className="relative z-50">
						<Arrow />

						<div className="mt-24 text-white text-6xl space-y-4">
							<h2>Full-stack</h2>
							<h2>Engineer</h2>
						</div>

						<UnderlinedLink text="download resume" />
					</Parallax>
				</div>

				<MarqueeHeader/>

				<Parallax speed={-1} className="relative z-30 pointer-events-none">
					<div className="bg-white h-screen" />
				</Parallax>
			</section>

			<section className="bg-white pt-[200px] relative z-40 mb-32">
				<Description />
			</section>

			<section className="bg-white">
				<ProjectList />
			</section>

			<section>
				<SlidingImages />
			</section>

			<section>
				<Contact />
			</section>
		</div>
	)
}
