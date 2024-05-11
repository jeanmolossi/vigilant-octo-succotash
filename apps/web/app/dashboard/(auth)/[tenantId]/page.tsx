import { MembersCard } from '@/ui/member-cards'
import React from 'react'

export default function Page() {
	return (
		<div className="min-h-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
				<MembersCard />
			</div>
		</div>
	)
}
