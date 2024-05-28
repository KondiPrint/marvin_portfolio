import Link from 'next/link';

const navLinks = [
  { name: 'Register', href: 'pages/register' },
  { name: 'Login', href: 'pages/login' },
  { name: 'Forgot Password', href: 'pages/forgot-password' },
];

export default function AuthLayout({ children }) {
  return (
    <div>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
      {children}
    </div>
  );
}
