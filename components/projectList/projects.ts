import {StaticImageData} from 'next/image'
import pokenameHero from '@/public/images/pokename.png'
import tickerHero from '@/public/work/ticker/hero.png'
import scrapyHero from '@/public/images/scrapy.png'
import kayshenHero from '@/public/images/wbtsk.png'

export type Project = {
	title: string,
	slug: string,
	type: string,
	src: StaticImageData,
	color: string
}

const projects: Project[] = [
	{
		title: 'POKENAME',
		slug: 'pokename',
		type: 'Design & Development',
		src: pokenameHero,
		color: '#000000'
	},
	{
		title: 'TICKER',
		slug: 'ticker',
		type: 'Realtime long duration stopwatch',
		src: tickerHero,
		color: '#eed3be'
	},
	{
		title: 'SCRAPY',
		slug: 'scrapy',
		type: 'Design & Development',
		src: scrapyHero,
		color: '#EFE8D3'
	},
	{
		title: 'KAYSHEN',
		slug: 'kayshen',
		type: 'Design & Development',
		src: kayshenHero,
		color: '#706D63'
	}
]

export default projects
