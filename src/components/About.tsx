import React from 'react';
import { CoffeeIcon, CodeIcon, PlaneIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 w-full">
              <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Developer working on code" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Hello there!</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate full stack developer and solutions designer with
              a love for creating efficient, elegant solutions to complex
              problems. With expertise in both front-end and back-end
              technologies, I build seamless digital experiences that solve
              real-world challenges.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, you'll find me exploring new places, trying
              different coffee beans, or diving into the latest tech trends. I
              believe that diverse experiences fuel creativity, which is why I'm
              constantly seeking new adventures and knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <CoffeeIcon className="text-amber-700" />
                <span>Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <CodeIcon className="text-blue-600" />
                <span>Code Lover</span>
              </div>
              <div className="flex items-center gap-3">
                <PlaneIcon className="text-green-600" />
                <span>Travel Addict</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};