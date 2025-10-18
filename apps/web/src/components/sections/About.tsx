import { Section } from '@/components/layout/Section';

export function About() {
  return (
    <Section id="about" className="bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
          <p>
            I'm a Full Stack Developer and Solutions Designer who bridges the gap between technical
            implementation and user-centered design. With expertise spanning modern frontend
            frameworks, scalable backend architectures, and cloud infrastructure, I craft solutions
            that are both technically robust and delightfully intuitive.
          </p>
          <p>
            My dual focus on development and design thinking allows me to approach problems
            holistically—considering not just how to build a feature, but why it matters to users
            and how it fits into the bigger picture. I thrive in environments where clean code meets
            thoughtful UX, and where every technical decision serves a clear business objective.
          </p>
          <p>
            Whether architecting a complex monorepo, optimizing CI/CD pipelines, or designing
            component systems that scale, I bring a solutions-first mindset to every challenge. I
            believe the best software comes from understanding both the technology and the people
            who use it.
          </p>
        </div>
      </div>
    </Section>
  );
}
