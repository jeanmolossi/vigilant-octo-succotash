import { MonthProvider } from '@/ui/providers/month'

export default function Layout({ children }: { children: React.ReactNode }) {
	return <MonthProvider>{children}</MonthProvider>
}
