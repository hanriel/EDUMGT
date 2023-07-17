import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserSignUpForm } from "@/components/user-signup-form";
import { Badge } from "@/components/ui/badge";
import VersionBage from "@/components/VersionBage";

const { version } = require("@/package.json");

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Регистрация на сайте.",
};

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Вход
        </Link>
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
          Создать аккаунт EDUMGT
        </h1>
        <p className="text-sm text-muted-foreground">
          Введите свой email чтобы создать аккаунт
        </p>
      </div>
      <UserSignUpForm />
      <p className="px-2 text-center text-sm text-muted-foreground">
        Нажимая &quot;Продолжить&quot;, вы соглашаетесь с
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          {" "}
          Правилами использования
        </Link>{" "}
        и{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Политикой конфидденциальности
        </Link>
        .
      </p>
    </>
  );
}
