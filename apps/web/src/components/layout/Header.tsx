import { Container } from './Container';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-gray-900 dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          >
            Dave Bulaquena
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  'text-gray-600 hover:text-gray-900',
                  'dark:text-gray-400 dark:hover:text-white'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
