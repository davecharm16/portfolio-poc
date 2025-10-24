import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export function Contact() {
  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Get In Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center">
              <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <a
                href="mailto:dave@davebulaquena.com"
                className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                davecharm16@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="text-lg text-gray-900 dark:text-white">
                Available for remote opportunities
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300}>
          <div className="mt-12">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
