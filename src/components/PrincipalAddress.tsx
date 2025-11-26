import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PrincipalAddress() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 
              className="text-4xl mb-6"
              style={{ color: '#0047AB', fontWeight: '600' }}
            >
              A Message from Our Principal
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Assalamu Alaikum and welcome to The Blueprint Schools family. As the Principal of this esteemed institution, 
                I am honored to lead a school that has been shaping young minds with Islamic values and academic excellence 
                for over a decade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission extends beyond traditional education. We strive to nurture confident, compassionate, and 
                knowledgeable individuals who will become positive contributors to society while maintaining their 
                Islamic identity and values.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At The Blueprint Schools, we believe that every child is unique and has the potential to achieve greatness. 
                Our dedicated team of educators works tirelessly to provide a supportive environment where students can...
              </p>
            </div>
            <Button 
              asChild
              className="text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0047AB' }}
            >
              <a href="/principal-address">Read Full Message</a>
            </Button>
          </div>

          {/* Right Content - Principal Photo */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621972600542-4cc56f0c72c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwcmluY2lwYWwlMjBhZnJpY2FuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODM3NzUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School Principal"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative Quote */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <blockquote 
                className="text-sm italic"
                style={{ color: '#0047AB' }}
              >
                "Education is the most powerful weapon which you can use to change the world, and with Islamic values, we shape better leaders."
              </blockquote>
              <cite className="text-xs text-gray-500 mt-2 block">- Dr. Amina Hassan, Principal</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}