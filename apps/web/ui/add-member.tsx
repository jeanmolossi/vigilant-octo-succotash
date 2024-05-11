import React from 'react'
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@appoint/ui'
import { PlusCircle } from 'lucide-react'
import { AddMemberForm } from './add-member-form'

export function AddMemberButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<PlusCircle />
					Adicionar novo membro
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Adicionar membro</DialogTitle>
					<DialogDescription>
						Adicione um novo membro a sua equipe.
					</DialogDescription>
				</DialogHeader>

				<AddMemberForm />
			</DialogContent>
		</Dialog>
	)
}
