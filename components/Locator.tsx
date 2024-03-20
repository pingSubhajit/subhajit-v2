import SpinningGlobe from '@/components/SpinningGlobe'
import {cn} from '@/lib/utils'

const Locator = ({className}: {className?: string}) => {
	  return (
		<div className={cn('bg-basil flex items-center justify-center w-[min-content] p-3 pr-12 gap-6 rounded-l-full', className)}>
			<div className="bg-white p-3 aspect-square rounded-full">
				<SpinningGlobe />
			</div>
			<div className="bg-basil flex flex-col items-end text-left whitespace-nowrap text-white">
				<p className="text-lg">Located in</p>
				<h4 className="text-3xl font-bold">India</h4>
			</div>
		</div>
	)
}

export default Locator
