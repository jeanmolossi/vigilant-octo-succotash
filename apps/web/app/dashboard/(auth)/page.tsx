import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@appoint/ui'
import { StudioSelector } from '@/ui/studio-selector'
import { fetchUserStudios } from '@/lib/actions/fetch-user-studios'

export default async function Page() {
	const studios = await fetchUserStudios()

	return (
		<div className="p-8 grid place-items-center min-h-screen">
			<Card>
				<CardHeader>
					<CardTitle>Selecione um estúdio</CardTitle>
					<CardDescription>
						Escolha abaixo o estúdio para o qual deseja acessar.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<StudioSelector studios={studios} />
				</CardContent>
			</Card>
		</div>
	)
}
