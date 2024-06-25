import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/ui/password-input'

export function SignUp() {
  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <div className="absolute right-8 top-8 flex flex-row items-center">
          <p className="text-sm">Já possui conta?</p>
          <Button asChild variant="link">
            <Link to="/sign-in">Fazer login</Link>
          </Button>
        </div>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Será ótimo tê-lo conosco!
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Seu usuário</Label>
              <Input id="username" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <PasswordInput id="password" />
            </div>

            <Button className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
