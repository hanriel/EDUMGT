"use client";

import * as React from "react";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { UpdateIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Почта
            </Label>
            <Input
              id="email"
              placeholder="Телефон или почта"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />}
            Войти
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            или продолжить с помощью
          </span>
        </div>
      </div>
      <Button
        onClick={() => signIn("vk", { callbackUrl: callbackUrl })}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
        )}{" "}
        VK ID
      </Button>

      <Button
        onClick={() => signIn("yandex", { callbackUrl: callbackUrl })}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <UpdateIcon className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <GitHubLogoIcon className="mr-1 h-4 w-4" />
        )}{" "}
        Яндекс
      </Button>

      <Button
        onClick={() => signIn("github", { callbackUrl: callbackUrl })}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <UpdateIcon className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <GitHubLogoIcon className="mr-1 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  );
}
