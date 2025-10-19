import { useState, useRef } from 'react';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CTO at TechCorp',
    content:
      'Dave delivered our project ahead of schedule with exceptional attention to detail.',
    avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content:
      'Working with Dave was a game-changer. He understands both code and business.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366F1&color=fff',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Engineering Lead',
    content:
      "Dave's full-stack capabilities are impressive. Always delivers robust solutions.",
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=EC4899&color=fff',
  },
];

type Position = 'front' | 'middle' | 'back';

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  position: Position;
  handleShuffle: () => void;
}

function TestimonialCard({ testimonial, position, handleShuffle }: TestimonialCardProps) {
  const dragRef = useRef(0);
  const isFront = position === 'front';

  return (
    <motion.div
      style={{
        zIndex: position === 'front' ? 2 : position === 'middle' ? 1 : 0,
      }}
      animate={{
        rotate: position === 'front' ? '-3deg' : position === 'middle' ? '0deg' : '3deg',
        x: position === 'front' ? '0%' : position === 'middle' ? '10%' : '20%',
        y: position === 'front' ? '0%' : position === 'middle' ? '5%' : '10%',
        opacity: position === 'front' ? 1 : position === 'middle' ? 0.7 : 0.4,
        scale: position === 'front' ? 1 : position === 'middle' ? 0.95 : 0.9,
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e) => {
        const event = e as any;
        dragRef.current = event.clientX;
      }}
      onDragEnd={(e) => {
        const event = e as any;
        if (dragRef.current - event.clientX > 100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-1/2 -translate-x-1/2 top-0 flex flex-col h-[320px] w-[260px] select-none rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-5 shadow-xl ${
        isFront ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <Quote className="h-7 w-7 text-cyan-500 mb-3" />

      <p className="text-gray-700 dark:text-gray-300 text-center text-sm leading-relaxed flex-grow">
        "{testimonial.content}"
      </p>

      <div className="flex flex-col items-center gap-2 pt-3 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="pointer-events-none h-12 w-12 rounded-full border-2 border-cyan-500"
        />
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      {isFront && (
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
          ← Drag to see next
        </p>
      )}
    </motion.div>
  );
}

export function Testimonials() {
  const [cards, setCards] = useState(testimonials);

  const handleShuffle = () => {
    setCards((prev) => {
      const copy = [...prev];
      const firstCard = copy.shift();
      if (firstCard) {
        copy.push(firstCard);
      }
      return copy;
    });
  };

  return (
    <Section id="testimonials" className="bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Don't just take my word for it - here's what colleagues and clients have to say
          </p>
        </ScrollReveal>

        <div className="relative h-[380px] w-full max-w-md mx-auto mb-20">
          {cards.map((testimonial, index) => {
            const position: Position =
              index === 0 ? 'front' : index === 1 ? 'middle' : 'back';
            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                position={position}
                handleShuffle={handleShuffle}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
