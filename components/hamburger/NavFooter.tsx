import UnderlinedLink from '@/components/UnderlinedLink'

export default function NavFooter() {
	return (
		<div className="flex w-full justify-between text-sm gap-10">
			<UnderlinedLink text='Github' />
			<UnderlinedLink text='Instagram' />
			<UnderlinedLink text='LinkedIn' />
		</div>
	)
}