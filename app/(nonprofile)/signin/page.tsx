import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserSignInForm } from "@/components/user-signin-form"

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Авторизация на сайте.",
}

export default function SignInPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Регистрация
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/images/logo.svg"
              className="mr-2 h-6 w-6"
              width={64}
              height={64}
              alt="Logo "
            />
            EDUMGT
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;На другой день я их не узнал. Отдуваясь, кряхтя, вертя головами, они честно, хотя и с великим трудом, пересиливали известную человеческую лень. Они увидели перед собой самую радостную перспективу: ценность человеческой личности.&rdquo;
              </p>
              <footer className="text-sm">А.С.Макаренко</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <Image
                className="block self-center dark:hidden"
                src="/images/logo-dark.svg"
                alt="Logo"
                width={65}
                height={65}
              />
              <Image
                className="hidden self-center dark:block"
                src="/images/logo.svg"
                alt="Logo"
                width={65}
                height={65}
              />
              <h1 className="text-2xl font-semibold tracking-tight">
                Вход EDUMGT
              </h1>
            </div>
            <UserSignInForm />
          </div>
        </div>
      </div>
    </>
  )
}