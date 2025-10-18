import { Section } from '@/components/layout/Section';
import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 justify-center">
            <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <a
              href="mailto:dave@davebulaquena.com"
              className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              dave@davebulaquena.com
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <span className="text-lg text-gray-900 dark:text-white">
              Available for remote opportunities
            </span>
          </div>
        </div>

        {/* Contact form will be added in next iteration */}
        <div className="mt-12 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Contact form coming soon. For now, please reach out via email.
          </p>
        </div>
      </div>
    </Section>
  );
}
