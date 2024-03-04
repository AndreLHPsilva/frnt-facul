import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface IPrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: IPrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if(!session){
    return redirect('/')
  }

  return <>{children}</>
}
