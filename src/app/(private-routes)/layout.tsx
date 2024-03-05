import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/utils/authOptions";

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
