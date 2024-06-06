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
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const navLinksDrop = [
    { name: 'Wonders', href: '/wonders' },
    { name: 'Todos', href: '/todos' },
    { name: 'News', href: '/news' },
    { name: 'Weather', href: '/weather' },
    { name: 'Random quotes', href: '/quotes' },
    { name: 'Recipes', href: '/recipes' },
  ];

  const pathname = usePathname();

  return (
    <header id='top' className='relative border-b-2 px-2'>
      <nav className='navbar'>
        <div className='flex-1 gap-2'>
          <Link href='/' className='hover:brightness-125'>
            <Image
              src='/assets/img/kondiprint_logo.png'
              width={150}
              height={90}
              alt='KondiPrints logo'
              className='h-auto w-auto'
            />
          </Link>
          <ThemeToggler />
        </div>

        <div className='flex-none hidden sm:flex z-50'>
          <ul className='menu menu-horizontal px-1'>
            {navLinks.map((links) => {
              const isActive = pathname.startsWith(links.href);

              return (
                <li key={links.name} className=''>
                  <Link
                    href={links.href}
                    className={isActive ? 'text-primary font-bold' : 'font-normal'}>
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
                        <Link
                          href={links.href}
                          className={isActive ? 'text-primary font-bold' : 'font-normal'}>
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
