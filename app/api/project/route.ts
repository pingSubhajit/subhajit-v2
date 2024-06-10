import {NextRequest, NextResponse} from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const body = await req.json()
		if (!body.email) {
			return NextResponse.json({
				status: 'error',
				message: 'Email is required'
			})
		}

		return NextResponse.json({
			status: 'success',
			email: body.email,
			message: `${body.email} has been added to the project`
		})
	} catch (error: any) {
		return NextResponse.json({
			status: 'error',
			message: error.message || 'An error occurred'
		})
	}
}