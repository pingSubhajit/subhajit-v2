import Header from '@/components/Header'

const ContactPage = () => {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<Header/>
			<div className="absolute bg-basil h-60 w-screen top-0"></div>
			<h1 className="text-center text-black font-medium text-4xl">Contact Page</h1>
		</div>
	)
}

export default ContactPage
