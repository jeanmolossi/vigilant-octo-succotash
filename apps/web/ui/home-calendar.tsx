'use client'

import { Calendar } from '@appoint/ui'
import React, { Suspense } from 'react'

export function HomeCalendar() {
	return (
		<Suspense fallback="Carregando calendário...">
			<Calendar
				className="w-full flex flex-col items-stretch"
				mode="single"
				selected={new Date()}
			/>
		</Suspense>
	)
}
