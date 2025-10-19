import { useState, useEffect } from 'react';
import { Container } from './Container';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

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

          {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-950/80 animate-fade-in md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <nav
            className="fixed top-16 right-0 bottom-0 z-50 w-64 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/80 border-l border-gray-200 dark:border-gray-800 shadow-xl animate-slide-in-from-right-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 p-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    'text-gray-900 hover:bg-gray-100',
                    'dark:text-white dark:hover:bg-gray-800',
                    'animate-slide-in-from-right-4'
                  )}
                  style={{
                    animationDelay: `${index * 50 + 100}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
