import { TenantProvider } from '@/ui/providers/tenant'

export default function Layout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { tenantId: string }
}) {
	return (
		<TenantProvider tenantId={params.tenantId}>{children}</TenantProvider>
	)
}
