import { z } from 'zod'

const attribuitions = z.enum(['Administrador', 'Tatuador', 'Assistente'])

export const addMemberSchema = z.object({
	name: z.string({ required_error: 'Nome obrigatório' }),
	email: z
		.string({ required_error: 'Email obrigatório' })
		.email('Email inválido'),
	attribuition: attribuitions,
})

export type AttribuitionsSchema = z.infer<typeof attribuitions>
export type AddMemberSchema = z.infer<typeof addMemberSchema>

export const attributes: Array<{
	attribute: AttribuitionsSchema
	description: string
}> = [
	{
		attribute: 'Administrador',
		description:
			'O Administrador pode adicionar, editar e excluir membros e agendamentos.',
	},
	{
		attribute: 'Tatuador',
		description: 'Tatuador pode gerenciar seus próprios agendamentos.',
	},
	{
		attribute: 'Assistente',
		description: 'Assistente pode gerenciar agendamentos de tatuadores',
	},
]
