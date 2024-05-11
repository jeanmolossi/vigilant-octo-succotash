export default function Loading() {
	return (
		<div className="flex flex-col gap-4 min-h-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
				<div className="flex rounded justify-center items-center h-96 w-full bg-muted animate-pulse"></div>
				<div className="flex rounded justify-center items-center h-96 w-full bg-muted animate-pulse"></div>
			</div>
		</div>
	)
}
