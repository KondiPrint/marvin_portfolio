'use client';

import React from 'react';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop';
import ToggleMenu from './ToggleMenu';
import ThemeToggler from './ThemeToggle';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const navLinks = [
    { name: 'About', href: '/pages/about' },
    { name: 'Contact', href: '/pages/contact' },
  ];

  const navLinksDrop = [
    { name: 'Todos', href: '/pages/todos' },
    { name: 'News', href: '/pages/news' },
    { name: 'Weather', href: '/pages/weather' },
    { name: 'Random quotes', href: '/pages/quotes' },
    { name: 'Recipes', href: '/pages/recipes' },
  ];

  const pathname = usePathname();

  return (
    <header id='top' className='relative border-b-2'>
      <nav className='navbar'>
        <div className='flex-1 gap-2'>
          <Link href='/' className='hover:brightness-125'>
            <Image src='/assets/img/kondiprint_logo.png' width={150} height={90} />
          </Link>
          <ThemeToggler />
        </div>

        <div className='flex-none hidden sm:flex z-50'>
          <ul className='menu menu-horizontal px-1'>
            {navLinks.map((links) => {
              const isActive = pathname.startsWith(links.href);

              return (
                <li key={links.name}>
                  <Link href={links.href} className={isActive ? 'text-primary font-bold' : 'font-normal'}>
                    {links.name}
                  </Link>
                </li>
              );
            })}

            <li>
              <details className=''>
                <summary>Playground</summary>
                <ul className='p-2 rounded-t-none'>
                  {navLinksDrop.map((links) => {
                    const isActive = pathname.startsWith(links.href);
                    return (
                      <li key={links.name}>
                        <Link href={links.href} className={isActive ? 'text-primary font-bold' : 'font-normal'}>
                          {links.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className='sm:hidden'>
          <ToggleMenu />
        </div>
      </nav>

      <ScrollToTop />
    </header>
  );
}
