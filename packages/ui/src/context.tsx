'use client'

import React from 'react'

export function createContext<T extends object | null>(defaultContext?: T) {
	const Context = React.createContext<T | undefined>(defaultContext)

	function Provider(props: T & { children?: React.ReactNode }) {
		const { children, ...context } = props

		const value = React.useMemo(() => context, Object.values(context)) as T
		return <Context.Provider value={value}>{children}</Context.Provider>
	}

	function useContext() {
		const context = React.useContext(Context)
		if (context) return context
		if (defaultContext !== undefined) return defaultContext

		throw new Error('useContext must be inside a Provider')
	}

	return [Provider, useContext] as const
}
