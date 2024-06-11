import Header from '@/components/Header'
import tickerHero from '@/public/work/ticker/hero.png'
import Image from 'next/image'
import ProjectDescription from '@/components/ProjectDescription'
import Button from '@/components/Button'
import Parallax from '@/components/utilities/Parallax'
import {MoveUpRight} from 'lucide-react'
import Link from 'next/link'
import Magnetic from '@/components/utilities/Magnetic'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Ticker | Subhajit Kundu',
	description: 'Ticker is a real-time long duration stopwatch application that can go on for days, months or ' +
		'even years. This project was built for personal usage turning into a fully-featured app sed by many people',

	openGraph: {
		title: 'Ticker | Subhajit Kundu',
		description: 'Ticker is a real-time long duration stopwatch application that can go on for days, months or ' +
			'even years. This project was built for personal usage turning into a fully-featured app sed by many people',
		images: '/og.jpg'
	}
}

const TickerProjectPage = () => {
	return (
		<div className="min-h-screen">
			<Header textClassName="text-black" decoratorClassName="bg-black" logoClassName="text-black" />

			<div className="grid grid-cols-12 gap-5 mt-40">
				<h1 className="text-black font-medium text-8xl mt-16 col-start-3 col-span-8 -translate-x-2">Ticker</h1>
				<h2 className="text-black text-3xl col-start-3 col-span-8 mb-24 lg:mb-32">Realtime long duration stopwatch</h2>

				<div className="col-start-3 col-span-8 lg:col-span-2 lg:col-start-3 mb-8 lg:mb-32">
					<h4 className="text-ghidorah text-xs font-medium uppercase">ROLE / SERVICES</h4>
					<div className="w-full h-[1px] bg-beige my-4"/>
					<p className="line-clamp-1 text-petroleum text-lg">Design, Development & Deploy</p>
				</div>

				<div className="col-start-3 col-span-8 lg:col-span-2 lg:col-start-6 mb-8 lg:mb-32">
					<h4 className="text-ghidorah text-xs font-medium uppercase">CREDITS</h4>
					<div className="w-full h-[1px] bg-beige my-4"/>
					<p className="line-clamp-1 text-petroleum text-lg">Design inspiration: Matt Wojtaś</p>
				</div>

				<div className="col-start-3 col-span-8 lg:col-span-2 lg:col-start-9 mb-24 lg:mb-32">
					<h4 className="text-ghidorah text-xs font-medium uppercase">PURPOSE</h4>
					<div className="w-full h-[1px] bg-beige my-4"/>
					<p className="line-clamp-1 text-petroleum text-lg">Personal requirement</p>
				</div>

				<Parallax speed={0.5} className="z-10">
					<a href="https://tickernow.xyz" target="_blank">
						<Button className="w-28 lg:w-44 aspect-square bg-black text-beige rounded-full flex items-center
						justify-center cursor-pointer whitespace-nowrap absolute right-36 top-28 [&>p]:flex
						[&>p]:justify-center [&>p]:items-center [&>p]:gap-1 text-sm lg:text-base">
							<p>Live app</p>
							<MoveUpRight className="w-4 h-4" />
						</Button>
					</a>
				</Parallax>

				<div className="aspect-[1.95] col-span-10 col-start-2 w-full bg-basil overflow-y-hidden">
					<Parallax speed={-1.05}>
						<Image
							src={tickerHero}
							alt="Pretty looking mockup of the Ticker app presented in an iPhone and in an iPad"
							className="col-span-12 col-start-1"
						/>
					</Parallax>
				</div>

				<video width="2160" height="1238"
					controls={false} preload="none"
					autoPlay={true} loop={true} muted={true}
					className="col-span-10 col-start-2 my-32"
				>
					<source src="/work/ticker/showcase1.webm" type="video/webm"/>
					Your browser does not support the video tag.
				</video>

				<div className="col-span-full bg-petroleum py-24 lg:py-52 text-beige grid grid-cols-12 gap-5" >
					<ProjectDescription
						description={'A small tool for creating stopwatch timers that can run for days, ' +
						'months, or even years. All synced in real-time across multiple devices. Loads fast and ' +
						'animated appropriately. Mobile first design.'}
						className="text-center col-start-3 col-span-8"
					/>

					<div className="mt-24 lg:mt-36 col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 flex flex-wrap justify-between items-center gap-4">
						<div className="h-32 w-32 lg:h-44 lg:w-44 bg-basil rounded-full flex items-center justify-center p-8">
							<p className="text-xs lg:text-base text-white font-medium text-center text-balance">NextJS 15</p>
						</div>
						<div className="h-32 w-32 lg:h-44 lg:w-44 bg-basil rounded-full flex items-center justify-center p-8">
							<p className="text-xs lg:text-base text-white font-medium text-center text-balance">React Compiler</p>
						</div>
						<Link href="/writings/partial-prerendering">
							<Magnetic>
								<div className="h-32 w-32 lg:h-44 lg:w-44 bg-basil rounded-full flex items-center justify-center p-8">
									<p className="text-xs lg:text-base text-white font-medium text-center text-balance">Partial Pre-rendering</p>
								</div>
							</Magnetic>
						</Link>
						<div className="h-32 w-32 lg:h-44 lg:w-44 bg-basil rounded-full flex items-center justify-center p-8">
							<p className="text-xs lg:text-base text-white font-medium text-center text-balance">Real-time changes</p>
						</div>
						<div className="h-32 w-32 lg:h-44 lg:w-44 bg-basil rounded-full flex items-center justify-center p-8">
							<p className="text-xs lg:text-base text-white font-medium text-center text-balance">Blazingly fast</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default TickerProjectPage