interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return (
    <section>
      <header className="flex justify-around items-center py-5 bg-emerald-500 text-white">
        <span>Calculadora IMC</span>
        <nav>
          <ul className="flex items-center gap-5">
            <li>Home</li>
            <li>Minhas Análises</li>
          </ul>
        </nav>
      </header>

      {children}
    </section>
  );
}
