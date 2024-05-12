import { NextRequest, NextResponse } from 'next/server'
import { parse } from './utils'
import { supabaseMiddleware } from '../supabase/middleware'
import { addMonths } from 'date-fns'

export default async function DashboardMiddleware(request: NextRequest) {
	console.log('Is DashboardMiddleware')

	const { fullPath, path } = parse(request)

	const supabase = await supabaseMiddleware(request)

	const {
		error,
		data: { user },
	} = await supabase.auth.getUser()

	if ((!user || error) && !['/login', '/register'].includes(path)) {
		if (error) {
			return NextResponse.redirect(
				new URL(`/login?error=${error.message}`, request.url),
			)
		}

		return NextResponse.redirect(new URL('/login', request.url))
	}

	const response = NextResponse.rewrite(
		new URL(`/dashboard${fullPath === '/' ? '' : fullPath}`, request.url),
	)

	if (user) {
		response.cookies.set('uid', user.id, {
			expires: addMonths(new Date(), 12),
		})
		response.headers.set('x-uid', user?.id)
	} else {
		response.cookies.set('uid', '', {
			expires: addMonths(new Date(), -12),
		})
	}

	return response
}
