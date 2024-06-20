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

		return new Response(JSON.stringify({
			status: 'success',
			email: body.email,
			message: `${body.email} has been added to the project`
		}), {
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			}
		})
	} catch (error: any) {
		return NextResponse.json({
			status: 'error',
			message: error.message || 'An error occurred'
		})
	}
}