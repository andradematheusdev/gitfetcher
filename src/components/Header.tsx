import Logo from "./Logo";
import {Sun, Moon} from 'phosphor-react';
import Switch from "./Switch";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Header() {
  const context = useContext(ThemeContext);
  return (
    <header className="flex w-full justify-between items-center h-16 border-b border-zinc-300 dark:border-zinc-700 px-4">      
        <div className="flex-1">
          <Logo width={241} height={48} dark={context.darkMode}/>
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-3">
          <Sun size={32} color={context.darkMode ? '#fff' : '#0EA5E9'} />
            <Switch />
          <Moon size={32} color={context.darkMode ? '#0EA5E9' : '#000'} />
        </div>
    </header>
  )
}