'use client'

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface INextAuthSessionProviderProps {
  children: ReactNode;
}

export default function NextAuthSessionProvider({
  children,
}: INextAuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
