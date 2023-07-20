import type { AuthOptions } from 'next-auth'
import YandexProvider from 'next-auth/providers/yandex'
import GitHubProvider from 'next-auth/providers/github'
import VKProvider from 'next-auth/providers/vk'

export const authConfig: AuthOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.YA_CLIENT_ID!,
      clientSecret: process.env.YA_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    VKProvider({
      clientId: process.env.VK_CLIENT_ID!,
      clientSecret: process.env.VK_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signin'
  }
}