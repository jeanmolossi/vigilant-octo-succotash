'use server'

import { cookies, headers } from 'next/headers'
import { cache } from 'react'
import { AppointApiError } from '@/lib/api/errors'

export const fetchUserStudios = cache(async () => {
	const cookieStore = cookies()
	let userId = cookieStore.get('uid')?.value || null
	if (!userId) {
		userId = headers().get('x-uid')
	}

	console.log('calling fetchUserStudios', userId)

	if (!userId) {
		return Promise.reject(
			new AppointApiError({
				code: 'unauthorized',
				message: 'Unauthorized',
			}),
		)
	}

	return Promise.resolve([
		{
			tenantId: 'estudio-1',
			label: 'Estudio 1',
		},
		{
			tenantId: 'estudio-2',
			label: 'Estudio 2',
		},
	])
})
