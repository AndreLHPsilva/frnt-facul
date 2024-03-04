import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface IAuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: IAuthLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if(session){
    return redirect('/home')
  }

  return <>{children}</>
}
