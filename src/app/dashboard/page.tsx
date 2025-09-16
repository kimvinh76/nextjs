import ServerStream from '../../components/ServerStream'
import DashboardWidget from '../../components/DashboardWidget'

export default async function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <section className="md:col-span-2">
        <h3 className="font-semibold text-lg mb-2">Server stream demo</h3>
        <ServerStream />
      </section>

      <aside>
        <h4 className="font-medium">Client widget</h4>
        <DashboardWidget />
      </aside>
    </div>
  )
}
