import { fetchUser } from '@/lib/actions/fetch-user'
import { Avatar, AvatarFallback, AvatarImage } from '@appoint/ui'
import Image from 'next/image'

export async function Header() {
	const { error, user } = await fetchUser()

	if (error || !user) {
		return (
			<header className="py-6">
				<div>Não foi possível carregar dados de usuário</div>
			</header>
		)
	}

	const initials = pickInitials(user.name || user.email)

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

function pickInitials(text: string) {
	const parts = text.split(' ')
	if (parts.length > 1) {
		return parts[0][0] + parts[1][0]
	}

	return parts[0].substring(0, 1)
}
