import React from 'react';
import Image from "next/image";
import logo from '../../public/logo.png'
import Link from "next/link";

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
      
      <nav className="flex items-center  gap-4">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/fqa'}>FQA</Link>
      </nav>
    </header>
  
  );
}
