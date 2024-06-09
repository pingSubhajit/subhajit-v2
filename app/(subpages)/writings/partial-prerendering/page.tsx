import Header from '@/components/Header'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Partial prerendering | Subhajit Kundu',
	description: 'In this articles i explore about a new and experimental page generation pattern in Next JS and ' +
		'how it can improve initial page load performance.',

	openGraph: {
		title: 'Partial prerendering | Subhajit Kundu',
		description: 'In this articles i explore about a new and experimental page generation pattern in Next JS and ' +
			'how it can improve initial page load performance.',
		images: '/og.jpg'
	}
}

const PartialPreRenderingArticles = () => {
	return (
		<div className="min-h-screen">
			<Header textClassName="text-black" decoratorClassName="bg-black" logoClassName="text-black"/>

			<div className="mt-40 grid grid-cols-12 gap-5">
				<article className="col-span-4 col-start-5 text-petroleum">
					<h1 className="text-xl font-medium">How partial pre-rendering can improve performance</h1>
					<time dateTime="2024-06-09" title="June 9th, 2024" className="text-sm text-basil">June 9th, 2024</time>

					<div className="mt-12 prose-sm leading-relaxed prose-neutral">
						<h3 className="font-semibold">What is it?</h3>
						<p>Well, simply put, there are two types of web pages: static and dynamic.</p>
						<p>
							<b>Static pages</b> are pages that consists of fixed content (namely HTML, CSS, and
							JavaScript) that doesn't change. That means when this type of page is requested, the server
							just sends the content.
						</p>

						<p>
							Whereas in terms of <b>dynamic pages</b>, some calculations are needed to be done before the
							page can be sent. So the server does the calculations, injects the required data into the
							HTML, and then sends the page.
						</p>

						<p>
							A very significant reason for performance issues is the time it takes for the server to
							process the page before sending. Whereas static pages can be sent even through something like
							a file server. This is where partial pre-rendering comes in.
						</p>

						<p>
							Usually no dynamic pages are fully dynamic. Mostly those pages are static with some dynamic
							elements. With partial pre-rendering, it's not about static or dynamic <i>page</i> anymore,
							it's about static or dynamic <i>elements</i>.
						</p>

						<h3 className="font-semibold">How does it work?</h3>
						<p>
							At build time, the server pre-renders the static parts of a dynamic page ready to be
							served. When a dynamic page is requested, the server immediately sends the pre-rendered
							static part of the page keeping the space empty where the dynamic parts would eventually be
							and starts processing for the dynamic sections. One the process is complete, the server
							then streams the dynamic parts to the client filling in the holes.
						</p>

						<h3 className="font-semibold">How to use?</h3>
						<p>
							In Next14@canary and Next15, PPR is an experimental feature that can be turned on through
							Next config file. Once turned on, the server will automatically pre-render the static parts
							without any changes to the codebase.
						</p>

						<p>
							This would only effectively work if the pages do not fetch data or do any calculations on
							request time and the dynamic parts of a page are wrapped in a React Suspense boundary.
						</p>
					</div>
				</article>
			</div>
		</div>
	)
}

export default PartialPreRenderingArticles
