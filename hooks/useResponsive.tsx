import {useEffect, useState} from 'react'
import {useDebounce} from 'react-use'

const useResponsive = () => {
	// screen resolutions
	const [state, setState] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	})

	useEffect(() => {
		// update the state on the initial load
		onResizeHandler()

		// assign the event
		setup()

		return () => {
			// remove the event
			cleanup()
		}
	}, [])

	// update the state on window resize
	const onResizeHandler = () => {
		const isMobile = window.innerWidth <= 640
		const isTablet = window.innerWidth >= 640 && window.innerWidth <= 990
		const isDesktop = window.innerWidth > 990

		setState({ isMobile, isTablet, isDesktop })
	}

	// debounce the resize call
	const debouncedCall = useDebounce(onResizeHandler, 500)

	// add event listener
	const setup = () => { // @ts-ignore
		window.addEventListener('resize', onResizeHandler, false)
	}

	// remove the listener
	const cleanup = () => { // @ts-ignore
		window.removeEventListener('resize', onResizeHandler, false)
	}

	return state
}

export default useResponsive
