'use client'

import React from 'react'
import {
	Button,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@appoint/ui'
import { cn } from '@appoint/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { attributes } from '@/lib/zod/add-member-schema'

export function MemberAttribuition({
	attribuition,
}: {
	memberId: string
	tenantId: string
	attribuition: string
}) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState(attribuition)

	const handleSelect = React.useCallback((currentValue: string) => {
		const attr = currentValue.split('__')[0]
		const val = attributes.find(v => v.attribute === attr)

		if (val) setValue(val.attribute)
		setOpen(false)
	}, [])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox">
					{value} <ChevronsUpDown className="h-4 w-4" />
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end">
				<Command>
					<CommandInput />
					<CommandList>
						<CommandEmpty>Nenhuma atribuição</CommandEmpty>

						<CommandGroup>
							{attributes.map(
								({ attribute, description }, index) => (
									<CommandItem
										value={attribute + '__' + description}
										key={index}
										onSelect={handleSelect}
									>
										<Check className={cn('mr-2 h-4 w-4')} />

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
	)
}
