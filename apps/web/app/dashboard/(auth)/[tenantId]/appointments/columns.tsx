'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@appoint/ui'
import { format, formatDistance, setHours, setMinutes } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { UcFirst } from '@appoint/utils'

export type Appointment = {
	id: string
	name?: string | null
	email: string
	status: 'pending' | 'accepted' | 'declined' | 'rejected' | 'canceled'
	date: Date
}

const variantByStatus = {
	pending: 'warn',
	accepted: 'success',
	declined: 'destructive',
	rejected: 'destructive',
	canceled: 'destructive',
}

export const columns: Array<ColumnDef<Appointment>> = [
	{
		accessorKey: 'id',
		header: '#',
	},
	{
		accessorKey: 'name',
		header: 'Cliente',
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell({ getValue }) {
			const value = getValue() as string
			const variant = variantByStatus[
				value as keyof typeof variantByStatus
			] as any

			return <Badge variant={variant}>{value}</Badge>
		},
	},
	{
		accessorKey: 'date',
		header: 'Data',
		cell({ getValue }) {
			const value = getValue() as Date
			const formatted = formatDistance(value, new Date(), {
				locale: ptBR,
				addSuffix: true,
				includeSeconds: true,
			})

			const appointDate = format(
				setMinutes(value, 0),
				'dd/MM/yyyy HH:mm',
				{ locale: ptBR },
			)

			return (
				<span className="flex flex-col">
					<span>{UcFirst(formatted)}</span>
					<small className="text-muted-foreground">
						{appointDate}
					</small>
				</span>
			)
		},
	},
]
