import {NextRequest, NextResponse} from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const body = await req.json()

		process.stdout.write(body)
		return NextResponse.json({
			status: 'success',
			message: 'Data received'
		})
	} catch (error: any) {
		return NextResponse.json({
			status: 'error',
			message: error.message || 'An error occurred'
		})
	}
}