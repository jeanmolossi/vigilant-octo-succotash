'use client'

import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import { addHours } from 'date-fns'

export default function Page() {
	return (
		<div>
			<DataTable
				data={[
					{
						id: '1',
						name: 'John Doe',
						email: 'john@doe.com',
						status: 'pending',
						date: addHours(new Date(), 1),
					},
					{
						id: '2',
						name: 'Mary',
						email: 'mary@doe.com',
						status: 'accepted',
						date: addHours(new Date(), 10),
					},
					{
						id: '3',
						name: 'Anne',
						email: 'anne@doe.com',
						status: 'rejected',
						date: addHours(new Date(), 10),
					},
					{
						id: '4',
						name: 'Shad',
						email: 'shad@man.com',
						status: 'declined',
						date: addHours(new Date(), 10),
					},
				]}
				columns={columns}
			/>
		</div>
	)
}
