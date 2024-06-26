import { CalendarDays } from 'lucide-react'

export function Schedule() {
  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center gap-3">
        <CalendarDays className="h-6 w-6 text-primary" />

        <h1 className="text-2xl font-semibold tracking-tight">Sua agenda</h1>
      </div>
      <p className="pb-8 text-sm text-muted-foreground">
        Consulte os seus horários agendados
      </p>
    </div>
  )
}
