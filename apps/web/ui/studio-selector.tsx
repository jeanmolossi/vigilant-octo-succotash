'use client'

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@appoint/ui'
import { redirect } from 'next/navigation'

export function StudioSelector({
	studios,
	align = 'center',
	defaultValue,
}: {
	studios: Array<{ tenantId: string; label: string }>
	align?: 'start' | 'center' | 'end'
	defaultValue?: string
}) {
	const onSelect = (value: string) => redirect(`/${value}`)

	const value = studios.find(
		({ tenantId }) => tenantId === defaultValue,
	)?.label

	return (
		<Select onValueChange={onSelect}>
			<SelectTrigger>
				<SelectValue placeholder={value || 'Selecione o estúdio'} />
			</SelectTrigger>

			<SelectContent align={align}>
				{studios.map(({ tenantId, label }) => (
					<SelectItem key={tenantId} value={tenantId}>
						<>{label}</>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
