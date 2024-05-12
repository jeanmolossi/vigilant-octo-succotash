import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@appoint/ui'
import { MemberAttribuition } from './member-attribuitions'
import { pickInitials } from '@appoint/utils'
import { AddMemberButton } from './add-member'

const members = [
	{
		id: '1',
		name: 'John Doe',
		email: 'john@doe.com',
		attribuition: 'Administrador',
	},
	{
		id: '2',
		name: null,
		email: 'anne@doe.com',
		attribuition: 'Assistente',
	},
	{
		id: '3',
		name: 'Mary',
		email: 'mary@doe.com',
		attribuition: 'Tatuador',
	},
	{
		id: '4',
		name: 'Shad',
		email: 'shad@doe.com',
		src: 'https://github.com/shadcn.png',
		attribuition: 'Assistente',
	},
]

export async function MembersCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Equipe</CardTitle>
				<CardDescription>
					Gerencie a atribuição dos membros da equipe
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-6">
				{members.map(({ id, name, email, src, attribuition }, i) => (
					<MemberItem
						key={i}
						tenantId="1"
						memberId={id}
						name={name}
						email={email}
						src={src}
						attribuition={attribuition}
					/>
				))}
			</CardContent>

			<CardFooter className="justify-end">
				<AddMemberButton />
			</CardFooter>
		</Card>
	)
}

function MemberItem({
	tenantId,
	memberId,
	src,
	name,
	email,
	attribuition,
}: {
	tenantId: string
	memberId: string
	src?: string
	name?: string | null
	email: string
	attribuition: string
}) {
	return (
		<div className="flex gap-6 items-center w-full">
			<Avatar>
				<AvatarImage src={src} />
				<AvatarFallback>{pickInitials(name || email)}</AvatarFallback>
			</Avatar>

			<p className="flex flex-col flex-1">
				<b>{name || 'Desconhecido'}</b>
				<small className="text-muted-foreground">{email}</small>
			</p>

			<MemberAttribuition
				tenantId={tenantId}
				memberId={memberId}
				attribuition={attribuition}
			/>
		</div>
	)
}
