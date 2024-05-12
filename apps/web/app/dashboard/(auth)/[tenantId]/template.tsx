import { Header, HeaderSkeleton } from '@/ui/header'
import Sidebar from '@/ui/sidebar'
import React, { Suspense } from 'react'

export default function Template({
	children,
}: {
	children: Readonly<React.ReactNode>
}) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[clamp(232px,100%,300px)_1fr] h-full gap-4 bg-muted/30">
			<Suspense>
				<Sidebar />
			</Suspense>

			<div className="flex flex-col px-4 pb-6 min-h-full overflow-y-auto">
				<Suspense fallback={<HeaderSkeleton />}>
					<Header />
				</Suspense>

				{children}

				<div className="h-8">Todos os direitos reservados</div>
			</div>
		</div>
	)
}
