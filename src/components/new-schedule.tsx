import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  Calendar as CalendarIcon,
  Check,
  Clock,
  Moon,
  Plus,
  Sun,
  SunDim,
  UserRound,
} from 'lucide-react'
import { useState } from 'react'

import { TimeSlots } from '@/components/times-slots'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/ui/multi-select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const clients = [
  {
    value: 'pedro',
    label: 'Pedro',
  },
  {
    value: 'henrique',
    label: 'Henrique',
  },
]

const morningTimes = [
  {
    time: '08:00',
  },
  {
    time: '08:30',
  },
  {
    time: '09:00',
  },
  {
    time: '09:30',
  },
  {
    time: '10:00',
  },
  {
    time: '10:30',
  },
  {
    time: '11:00',
  },
  {
    time: '11:30',
  },
]

const afternoonTimes = [
  {
    time: '13:00',
  },
  {
    time: '13:30',
  },
  {
    time: '14:00',
  },
  {
    time: '14:30',
  },
  {
    time: '15:00',
  },
  {
    time: '15:30',
  },
  {
    time: '16:00',
  },
  {
    time: '16:30',
  },
]

const nightTimes = [
  {
    time: '18:00',
  },
  {
    time: '18:30',
  },
  {
    time: '19:00',
  },
  {
    time: '19:30',
  },
  {
    time: '20:00',
  },
]

const services = [
  { label: 'Cabelo', value: 'cabelo' },
  { label: 'Barba', value: 'barba' },
  { label: 'Pézinho', value: 'pezinho' },
]

export function NewSchedule() {
  const [date, setDate] = useState<Date>()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [service, setService] = useState<string[]>([])

  return (
    <div className="flex items-center">
      <div className="flex-col justify-between rounded-lg bg-muted p-10 md:flex">
        <div className="space-y-4">
          <div className="flex flex-row items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />

            <h1 className="text-2xl font-semibold tracking-tight">
              Novo agendamento
            </h1>
          </div>
          <p className="pb-2 text-sm text-muted-foreground">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </p>

          <div className="flex flex-col space-y-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div className="flex flex-col gap-2">
                  <Label className="text-lg">Cliente</Label>
                  <Button
                    size="lg"
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-start text-left font-normal hover:bg-black/30"
                  >
                    <UserRound className="mr-2 h-4 w-4 text-primary" />
                    {value ? (
                      clients.find((client) => client.value === value)?.label
                    ) : (
                      <span className="text-muted-foreground">
                        Selecione o cliente
                      </span>
                    )}
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="flex w-full p-2">
                <Command>
                  <div className="p-4">
                    <Button className="flex w-full gap-3" variant="outline">
                      <Plus className="h-4 w-4" />
                      <Label>Adicionar novo cliente</Label>
                    </Button>
                  </div>
                  <CommandInput placeholder="Pesquise aqui..." />

                  <CommandList>
                    <CommandEmpty>Nenhum cliente encontrado</CommandEmpty>
                    <CommandGroup>
                      {clients.map((client) => (
                        <CommandItem
                          key={client.value}
                          value={client.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? '' : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value === client.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {client.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <div className="flex flex-col gap-2">
                  <Label className="text-lg">Data</Label>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start text-left font-normal hover:bg-black/30"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {date ? (
                      format(date, 'PPP', { locale: ptBR })
                    ) : (
                      <span className="text-muted-foreground">
                        Selecione a data
                      </span>
                    )}
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <div>
              <Label className="text-lg">Serviços</Label>

              <MultiSelector
                values={service}
                onValuesChange={setService}
                loop={false}
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder="Selecione os serviços" />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {services.map((option, i) => (
                      <MultiSelectorItem key={i} value={option.label}>
                        {option.label}
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
            </div>

            <div className="flex flex-col gap-2 pb-4">
              <Label className="text-lg">Horários</Label>

              <TimeSlots
                label="Manhã"
                times={morningTimes}
                icon={SunDim}
                iconColor="text-yellow-200"
              />
              <TimeSlots
                label="Tarde"
                times={afternoonTimes}
                icon={Sun}
                iconColor="text-yellow-400"
              />
              <TimeSlots
                label="Noite"
                times={nightTimes}
                icon={Moon}
                iconColor="text-blue-300"
              />
            </div>

            <Button
              size="lg"
              title="Realizar agendamento"
              className="w-full gap-2 "
            >
              <Check />
              Agendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
