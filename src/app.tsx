import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { router } from '@/routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="sistema" storageKey="barbagenda-theme">
        <Helmet titleTemplate="%s | Barbagenda" />
        <RouterProvider router={router} />

        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  )
}
