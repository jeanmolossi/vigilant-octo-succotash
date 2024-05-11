'use client'

import { createContext } from '@appoint/ui'

type TenantContext = {
	tenantId: string
}

const [TenantProvider, useTenantContext] = createContext<TenantContext>()

export { TenantProvider, useTenantContext }
