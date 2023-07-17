import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import VKProvider from "next-auth/providers/vk";
import Yandex from "next-auth/providers/yandex";
import YandexProvider from "next-auth/providers/yandex";

export const authConfig: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    VKProvider({
      clientId: process.env.VK_ID as string,
      clientSecret: process.env.VK_SECRET as string,
    }),
    Yandex({
      clientId: process.env.YA_ID as string,
      clientSecret: process.env.YA_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: "1WGjUOsS4Bw+HlJ4XOaRCX+YWQtP+BRFDOGnovKAbhk=",
};
