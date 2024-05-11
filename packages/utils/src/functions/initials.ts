export function pickInitials(text: string): string {
	const parts = text.split(' ')
	if (parts.length > 1) {
		return (parts[0][0] + parts[1][0]).toUpperCase()
	}

	return parts[0].substring(0, 2).toUpperCase()
}

export function UcFirst(text: string) {
	const initial = text.substring(0, 1).toUpperCase()
	return `${initial}${text.substring(1, text.length)}`
}
