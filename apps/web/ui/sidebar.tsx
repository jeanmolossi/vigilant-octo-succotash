'use client'

import { Button } from '@appoint/ui'
import {
	BarChart,
	Calendar,
	FilePlus2,
	LayoutGrid,
	MessageSquare,
	Settings,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import { LogoutButton } from './logout-button'

const components: Array<{
	icon: React.ComponentType
	label: string
	href: string
}> = [
	{
		icon: LayoutGrid,
		label: 'Visão Geral',
		href: '/',
	},
	{
		icon: FilePlus2,
		label: 'Agendamentos',
		href: '/appointments',
	},
	{
		icon: Calendar,
		label: 'Calendário',
		href: '/calendar',
	},
	{
		icon: MessageSquare,
		label: 'Mensagens',
		href: '/messages',
	},
	{
		icon: BarChart,
		label: 'Relatórios',
		href: '/reports',
	},
	{
		icon: Settings,
		label: 'Configurações',
		href: '/settings',
	},
]

export default function Sidebar() {
	const path = usePathname()

	const isActiveVariant = (href: string) => {
		return href === path ? 'default' : 'outline'
	}

	return (
		<div className="flex flex-col gap-6 p-4">
			<div className="flex justify-center items-center gap-2 h-12">
				<Logo width={40} />

				<span className="text-xl font-medium text-primary">
					Labor Hematology
				</span>
			</div>

			<div className="flex flex-col gap-4 flex-1">
				{components.map(({ icon: Icon, label, href }, i) => (
					<Button key={i} variant={isActiveVariant(href)} asChild>
						<Link href={href}>
							<Icon /> {label}
						</Link>
					</Button>
				))}
			</div>

			<div className="flex items-stretch">
				<LogoutButton className="w-full" />
			</div>
		</div>
	)
}
