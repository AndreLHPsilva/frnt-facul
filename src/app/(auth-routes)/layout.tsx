import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/utils/authOptions";

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
