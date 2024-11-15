import Link from 'next/link';
import { navItems } from '@/lib/constants';
import { AuthStatus } from '@/components/auth/auth-status';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold">
            Modern Next.js
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <AuthStatus />
        </div>
      </div>
    </nav>
  );
}