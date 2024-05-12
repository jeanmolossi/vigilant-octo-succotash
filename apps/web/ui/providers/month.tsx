'use client'

import { createContext } from '@appoint/ui'
import { addMonths, format } from 'date-fns'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type MonthContext = {
	month?: Date
	prevMonth: () => void
	nextMonth: () => void
	today: () => void
}

const [MonthInnerProvider, useMonthContext] = createContext<MonthContext>({
	month: new Date(),
	prevMonth: () => {},
	nextMonth: () => {},
	today: () => {},
})

function MonthProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const params = useSearchParams()
	const router = useRouter()

	let urlMonth = params.get('month')
	if (!urlMonth) urlMonth = new Date().toISOString()

	const month = new Date(urlMonth)

	const urlDateFormatter = (v: Date) => format(v, 'yyyy-MM-dd')

	const prevMonth = () => {
		const prevMonthDate = addMonths(month, -1)

		const search = new URLSearchParams(params)
		search.set('month', urlDateFormatter(prevMonthDate))
		router.replace(pathname + `?${search.toString()}`)
	}

	const nextMonth = () => {
		const nextMonthDate = addMonths(month, 1)

		const search = new URLSearchParams(params)
		search.set('month', urlDateFormatter(nextMonthDate))
		router.replace(pathname + `?${search.toString()}`)
	}

	const today = () => {
		router.replace(pathname)
	}

	return (
		<MonthInnerProvider
			month={month}
			prevMonth={prevMonth}
			nextMonth={nextMonth}
			today={today}
		>
			{children}
		</MonthInnerProvider>
	)
}

export { MonthProvider, useMonthContext }
