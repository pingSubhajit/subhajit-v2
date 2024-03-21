import SpinningGlobe from '@/components/SpinningGlobe'
import {cn} from '@/lib/utils'

const Locator = ({className}: {className?: string}) => {
	  return (
		<div className={cn('bg-basil flex items-center justify-center w-[min-content] p-2 pr-4 lg:p-3 lg:pr-12 gap-2 lg:gap-6 rounded-l-full', className)}>
			<div className="bg-white p-2 lg:p-3 aspect-square rounded-full">
				<SpinningGlobe />
			</div>
			<div className="bg-basil flex flex-col items-end text-left whitespace-nowrap text-white">
				<p className="text-base lg:text-lg">Located in</p>
				<h4 className="-mt-2 lg:mt-0 text-xl lg:text-3xl font-bold">India</h4>
			</div>
		</div>
	)
}

export default Locator
