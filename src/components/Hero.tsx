import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const openContactModal = () => {
    const modal = document.getElementById('contact-modal') as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 
              className="text-5xl lg:text-6xl leading-tight"
              style={{ color: '#0047AB', fontWeight: '700' }}
            >
              Excellence in Islamic Education
            </h1>
            <p 
              className="text-xl text-gray-600 leading-relaxed"
            >
              The Blueprint Schools provides world-class Islamic education from daycare to college level, 
              nurturing young minds with strong Islamic values, academic excellence, and modern skills 
              for success in today's world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openContactModal}
                size="lg"
                className="text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#0047AB' }}
              >
                Make Enquiry
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-2 hover:bg-blue-50 transition-colors"
                style={{ borderColor: '#0047AB', color: '#0047AB' }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#FFD700' }}></div>
                <span>Established 2010</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#FFD700' }}></div>
                <span>500+ Happy Students</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#FFD700' }}></div>
                <span>Certified Teachers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565490129165-bd6a24996c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbmlnZXJpYW4lMjBzdHVkZW50cyUyMHRleHRib29rcyUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4Mzc3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy students with textbooks"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div 
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: '#FFD700' }}
            ></div>
            <div 
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: '#0047AB' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}