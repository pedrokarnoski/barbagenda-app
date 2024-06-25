import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/ui/password-input'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="absolute right-8 top-8 flex flex-row items-center">
          <p className="text-sm">Ainda não possui uma conta?</p>
          <Button asChild variant="link">
            <Link to="/sign-up">Nova conta</Link>
          </Button>
        </div>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar</h1>
            <p className="text-sm text-muted-foreground">
              Gerencie a sua barbearia!
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Seu usuário</Label>
              <Input id="username" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <PasswordInput id="password" />
            </div>

            <Button className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
