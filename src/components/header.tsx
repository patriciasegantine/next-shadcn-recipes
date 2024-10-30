import React from 'react';
import Image from "next/image";
import logo from '../../public/logo.png'
import Link from "next/link";
import { ThemeModeToggle } from "@/components/theme-mode";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={logo} alt="logo"
          height={60}
        />
        <h1>Recipes</h1>
      </div>
      
      <nav className="flex items-center  gap-8">
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/fqa'}>FQA</Link>
        <Link href={'/login'}>Login</Link>
        <ThemeModeToggle/>
      </nav>
      
    </header>
  
  );
}
