import { endOfDay, endOfMonth, isAfter, isBefore, startOfMonth } from 'date-fns'

export function getMonth(from: Date = new Date()) {
	const firstMonthDay = startOfMonth(from)
	let currentMonthCount = 0 - firstMonthDay.getDay()

	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++
			return new Date(
				firstMonthDay.getFullYear(),
				firstMonthDay.getMonth(),
				currentMonthCount,
			)
		})
	})

	const lastDayMatrix = endOfDay(
		daysMatrix[4].slice(daysMatrix[4].length - 1)[0],
	)

	// when last day of the month is not present
	// then push another week
	const isLastDayPresent = isAfter(lastDayMatrix, endOfMonth(from))
	if (!isLastDayPresent) {
		daysMatrix.push(
			new Array(7).fill(null).map(() => {
				currentMonthCount++
				return new Date(
					firstMonthDay.getFullYear(),
					firstMonthDay.getMonth(),
					currentMonthCount,
				)
			}),
		)
	}

	return daysMatrix
}
