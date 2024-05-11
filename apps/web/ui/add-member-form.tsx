'use client'

import {
	AddMemberSchema,
	addMemberSchema,
	attributes,
} from '@/lib/zod/add-member-schema'
import {
	Button,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	DialogClose,
	DialogFooter,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@appoint/ui'
import { cn } from '@appoint/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronsUpDown, Check, Save } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

export function AddMemberForm() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState('Assistente')

	const form = useForm<AddMemberSchema>({
		resolver: zodResolver(addMemberSchema),
		defaultValues: { attribuition: 'Assistente' },
	})

	const handleSelect = React.useCallback((currentValue: string) => {
		const attr = currentValue.split('__')[0]

		const attribuition = attributes.find(item => item.attribute === attr)
		if (attribuition) {
			setValue(attribuition.attribute)
			form.setValue('attribuition', attribuition.attribute)
		}

		setOpen(false)
	}, [])

	return (
		<Form {...form}>
			<form className="space-y-4">
				<FormField
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome do membro</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail do colaborador</FormLabel>
							<FormControl>
								<Input
									placeholder="email@server.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex flex-col gap-3">
					<Label>Atribuição do membro</Label>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="flex-grow-0 min-w-[200px] w-min"
								role="combobox"
							>
								{value} <ChevronsUpDown className="h-4 w-4" />
							</Button>
						</PopoverTrigger>

						<PopoverContent align="start">
							<Command>
								<CommandInput />
								<CommandList>
									<CommandEmpty>
										Nenhuma atribuição
									</CommandEmpty>

									<CommandGroup>
										{attributes.map(
											(
												{ attribute, description },
												index,
											) => (
												<CommandItem
													value={
														attribute +
														'__' +
														description
													}
													key={index}
													onSelect={handleSelect}
												>
													<Check
														className={cn(
															'mr-2 h-4 w-4',
														)}
													/>

													<p className="flex flex-col">
														{attribute}

														<small className="text-muted-foreground">
															{description}
														</small>
													</p>
												</CommandItem>
											),
										)}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
				</div>

				<DialogFooter className="pt-6">
					<Button type="submit">
						<Save />
						Adicionar
					</Button>

					<DialogClose asChild>
						<Button type="button" variant="destructive">
							Cancelar
						</Button>
					</DialogClose>
				</DialogFooter>
			</form>
		</Form>
	)
}
