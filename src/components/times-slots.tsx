import { Sun } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Toggle } from '@/components/ui/toggle'

type TimeSlotProps = {
  label: string
  times: { time: string }[]
  icon: React.ElementType // Componente de ícone
  iconColor: string // Cor do ícone
}

export function TimeSlots({
  label,
  times,
  icon: Icon,
  iconColor,
}: TimeSlotProps) {
  return (
    <>
      <Label className="flex flex-row gap-2 text-sm text-muted-foreground">
        <Icon className={`h-5 w-5 ${iconColor}`} /> {label}
      </Label>
      <div className="flex flex-wrap gap-3">
        {times.map((time) => (
          <Toggle
            key={time.time}
            variant="outline"
            className="min-w-24 max-w-32"
          >
            {time.time}
          </Toggle>
        ))}
      </div>
    </>
  )
}
