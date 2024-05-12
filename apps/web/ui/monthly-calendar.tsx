'use client'

import { getMonth } from '@/lib/calendar/month'
import { UcFirst, cn } from '@appoint/utils'
import { format, isToday, getMonth as fnsGetMonth } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { useMonthContext } from './providers/month'
import { Button } from '@appoint/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function MonthlyCalendar() {
	const {
		month: from = new Date(),
		prevMonth,
		today,
		nextMonth,
	} = useMonthContext()
	const month = getMonth(from)

	const monthAndYear = format(from, 'LLLL yyyy', { locale: ptBR })

	return (
		<div className="flex flex-col gap-2 min-h-full">
			<header className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Button variant="outline" size="icon" onClick={prevMonth}>
						<ChevronLeft />
						<span className="sr-only">Mês anterior</span>
					</Button>

					<Button variant="outline" onClick={today}>
						Hoje
					</Button>

					<Button variant="outline" size="icon" onClick={nextMonth}>
						<ChevronRight />
						<span className="sr-only">Próximo mês</span>
					</Button>
				</div>

				<span className="text-muted-foreground font-medium text-lg">
					{UcFirst(monthAndYear)}
				</span>
			</header>

			<div
				className={cn(
					'grid grid-cols-7 flex-1 my-4 border border-input',
					month.length === 5 ? 'grid-rows-5' : 'grid-rows-6',
				)}
			>
				{month.map((week, wid) => (
					<React.Fragment key={wid}>
						{week.map((day, did) => (
							<Day
								key={did}
								day={day}
								week={wid}
								monthSource={from}
							/>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

function Day({
	day,
	week,
	monthSource,
}: {
	day: Date
	week: number
	monthSource: Date
}) {
	const dayDate = format(day, 'dd')
	const dayWeekDate = UcFirst(format(day, 'EEE', { locale: ptBR }))
	const isTodayDate = isToday(day)

	const isSameMonth = fnsGetMonth(monthSource) === fnsGetMonth(day)

	return (
		<div
			className={cn(
				'border border-input flex flex-col items-center gap-2 p-2',
				isSameMonth ? '' : 'opacity-20 cursor-default select-none',
			)}
		>
			{week === 0 && (
				<span className="text-muted-foreground text-sm">
					{dayWeekDate}
				</span>
			)}

			<span
				className={cn(
					'w-7 h-7 rounded-full text-center text-sm !leading-7',
					isTodayDate && 'bg-primary text-primary-foreground',
				)}
			>
				{dayDate}
			</span>

			<div className="grid grid-rows-12 flex-1 w-full overflow-x-clip gap-1 text-sm">
				{week === 2 && dayDate === '13' && (
					<>
						<div className="row-span-1 row-start-1 bg-primary text-primary-foreground px-1 rounded-sm">
							Luana
						</div>
						<div className="row-span-3 row-start-3 bg-primary text-primary-foreground px-1 rounded-sm">
							Jean
						</div>
						<div className="row-span-3 row-start-5 bg-primary text-primary-foreground px-1 rounded-sm">
							Gigio
						</div>
						<div className="row-span-3 row-start-5 bg-primary text-primary-foreground px-1 rounded-sm">
							Gianni
						</div>
					</>
				)}
			</div>
		</div>
	)
}
