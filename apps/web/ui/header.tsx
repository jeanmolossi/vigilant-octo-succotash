import { fetchUser } from '@/lib/actions/fetch-user'
import { fetchUserStudios } from '@/lib/actions/fetch-user-studios'
import { Avatar, AvatarFallback, AvatarImage, Label } from '@appoint/ui'
import { pickInitials } from '@appoint/utils'
import { StudioSelector } from './studio-selector'

export async function Header() {
	const fetchUserPromise = fetchUser()
	const fetchStudiosPromise = fetchUserStudios()

	const { error, user } = await fetchUserPromise

	if (error || !user) {
		return (
			<header className="py-6">
				<div>Não foi possível carregar dados de usuário</div>
			</header>
		)
	}

	const initials = pickInitials(user.name || user.email!)
	const studios = await fetchStudiosPromise

	return (
		<header className="py-6 flex justify-between">
			<div className="flex items-center gap-4">
				<Avatar>
					<AvatarImage
						alt="Foto de perfil do usuário"
						src={user.image || undefined}
						width={40}
						height={40}
					/>
					<AvatarFallback>{initials.toUpperCase()}</AvatarFallback>
				</Avatar>

				<span>Bem vindo(a), {user.name || user.email}</span>
			</div>

			<div className="flex gap-2 flex-col">
				<Label>Alterar estúdio</Label>
				<StudioSelector studios={studios} align="end" />
			</div>
		</header>
	)
}

export async function HeaderSkeleton() {
	return (
		<header className="py-6 flex gap-2 items-center">
			<div className="w-[40px] h-[40px] rounded-full bg-gray-200 animate-pulse"></div>
			<div className="w-[240px] rounded h-5 bg-gray-200 animate-pulse"></div>
		</header>
	)
}
