import {StaticImageData} from 'next/image'
import halycronHero from '@/public/images/halycron.png'
import tickerHero from '@/public/work/ticker/hero.png'
import letrazHero from '@/public/images/letraz.png'
import stacksHero from '@/public/images/stacks.png'

export type Project = {
	title: string,
	subtitle: string,
	slug: string,
	type: string,
	src: StaticImageData,
	color: string
}

const projects: Project[] = [
	{
		title: 'Halycron',
		subtitle: 'Truly secure, private photo vault',
		slug: 'halycron',
		type: 'Design & Development',
		src: halycronHero,
		color: '#121C1C'
	},
	{
		title: 'Letraz',
		subtitle: 'Automated tailored resumes for each job',
		slug: 'letraz',
		type: 'Design & Development',
		src: letrazHero,
		color: '#B7B2A3'
	},
	{
		title: 'Ticker',
		subtitle: 'Realtime long duration stopwatch',
		slug: 'ticker',
		type: 'Realtime long duration stopwatch',
		src: tickerHero,
		color: '#eed3be'
	},
	{
		title: 'Stacks',
		subtitle: 'A platform for creators',
		slug: 'kayshen',
		type: 'Design & Development',
		src: stacksHero,
		color: '#706D63'
	}
]

export default projects
