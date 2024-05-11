import { fetchUser } from '@/lib/actions/fetch-user'
import { Avatar, AvatarFallback, AvatarImage } from '@appoint/ui'
import { pickInitials } from '@appoint/utils'

export async function Header() {
	const { error, user } = await fetchUser()

	if (error || !user) {
		return (
			<header className="py-6">
				<div>Não foi possível carregar dados de usuário</div>
			</header>
		)
	}

	const initials = pickInitials(user.name || user.email!)

	return (
		<header className="py-6">
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
