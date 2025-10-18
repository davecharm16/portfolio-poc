import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './Container';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/davebulaquena', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/davebulaquena', icon: Linkedin },
  { name: 'Email', href: 'mailto:dave@davebulaquena.com', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Dave Charm Bulaquena. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
