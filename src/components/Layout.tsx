import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";
import { Header } from "./Header";

interface ILayoutProps{
  children: React.ReactNode;
}

export default function Layout({children}: ILayoutProps) {
  const context = useContext(ThemeContext);
  return (
    <main className={clsx({'dark': context.darkMode})}>
      <div className="flex flex-col h-screen bg-white dark:bg-zinc-900 dark:text-white">
      <Header />
        {children}
      <Footer />
      </div>
    </main>
  )
}
