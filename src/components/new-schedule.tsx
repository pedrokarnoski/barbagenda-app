import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon, Check, Clock, UserRound } from 'lucide-react'
import { useState } from 'react'

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
export function NewSchedule() {
  const [date, setDate] = useState<Date>()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

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
          <p className="pb-8 text-sm text-muted-foreground">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </p>

          <div className="flex flex-col space-y-8">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div className="flex flex-col gap-2">
                  <Label className="text-lg">Cliente</Label>
                  <Button
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
              <PopoverContent className="w-auto p-2">
                <Command>
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

            <div className="flex flex-col gap-2">
              <Label className="text-lg">Horários</Label>

              <Label className="text-sm font-normal text-muted-foreground">
                Manhã
              </Label>

              <div className="flex gap-2">
                <Button variant="outline">08:00</Button>
                <Button variant="outline">09:00</Button>
                <Button variant="outline">10:00</Button>
                <Button>11:00</Button>
              </div>

              <Label className="text-sm font-normal text-muted-foreground">
                Tarde
              </Label>

              <div className="flex gap-2">
                <Button variant="outline">13:00</Button>
                <Button variant="outline">14:00</Button>
                <Button variant="outline">15:00</Button>
                <Button variant="outline">16:00</Button>
              </div>

              <Label className="text-sm font-normal text-muted-foreground">
                Noite
              </Label>

              <div className="flex gap-2">
                <Button variant="outline">18:00</Button>
                <Button variant="outline">19:00</Button>
                <Button variant="outline">20:00</Button>
                <Button variant="outline">21:00</Button>
              </div>
            </div>

            <Button className="gap-2">
              <Check />
              Agendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
