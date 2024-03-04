interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return <section>{children}</section>;
}
