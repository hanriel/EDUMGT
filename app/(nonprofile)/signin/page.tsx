import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserSignInForm } from "@/components/user-signin-form";
import { Badge } from "@/components/ui/badge";
import VersionBage from "@/components/VersionBage";

export const metadata: Metadata = {
  title: "Вход",
  description: "Вход в систему.",
};

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Регистрация
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
          Вход EDUMGT
        </h1>
      </div>
      <UserSignInForm />
    </>
  );
}
