import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, BookOpen, Globe } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "500+" },
    { icon: BookOpen, label: "Years of Excellence", value: "15+" },
    { icon: Award, label: "Certified Teachers", value: "45+" },
    { icon: Globe, label: "Success Stories", value: "1000+" }
  ];

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
              About The Blueprint Schools
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Established in 2010, The Blueprint Schools has been at the forefront of Islamic education 
                in Nigeria, providing comprehensive learning experiences that balance academic excellence 
                with strong Islamic values.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our institution serves students from daycare through college level, offering a nurturing 
                environment where young minds can grow intellectually, spiritually, and socially. We pride 
                ourselves on our holistic approach to education that prepares students for success in both 
                this world and the hereafter.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With state-of-the-art facilities, experienced educators, and a curriculum that meets 
                international standards while maintaining Islamic authenticity, we continue to be the 
                preferred choice for families seeking quality Islamic education.
              </p>
            </div>
            <Button 
              asChild
              className="text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0047AB' }}
            >
              <a href="/our-story">Read Our Full Story</a>
            </Button>
          </div>

          {/* Right Content - School Image & Stats */}
          <div className="space-y-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1722807797686-6d9e4041f534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMG5pZ2VyaWElMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzc3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="The Blueprint Schools building"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <stat.icon 
                    className="h-8 w-8 mx-auto mb-2" 
                    style={{ color: '#FFD700' }}
                  />
                  <div 
                    className="text-2xl mb-1"
                    style={{ color: '#0047AB', fontWeight: '600' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}