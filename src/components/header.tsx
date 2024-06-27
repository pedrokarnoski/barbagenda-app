import { Scissors } from 'lucide-react'

import { AccountMenu } from '@/components/account.menu'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Scissors className="h-5 w-5 text-muted-foreground" />
          <span className="text-md flex flex-row font-leckerli-one tracking-wider text-primary md:text-2xl">
            Barb<p className="text-muted-foreground">agenda</p>
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
