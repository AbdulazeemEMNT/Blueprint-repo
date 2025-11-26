import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admission', href: '/admission' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const academics = [
    { name: 'Daycare Program', href: '/daycare' },
    { name: 'Nursery School', href: '/nursery' },
    { name: 'Primary Education', href: '/primary' },
    { name: 'College Level', href: '/college' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: '#0047AB' }}
              >
                <span className="font-bold text-white text-lg">BP</span>
              </div>
              <h3 className="text-xl font-semibold">The Blueprint Schools</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Excellence in Islamic education since 2010. Nurturing young minds with 
              Islamic values and academic excellence from daycare to college level.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#0047AB' }}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#0047AB' }}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#0047AB' }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#0047AB' }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: '#FFD700' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: '#FFD700' }}>
              Academic Programs
            </h4>
            <ul className="space-y-2">
              {academics.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: '#FFD700' }}>
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1" style={{ color: '#FFD700' }} />
                <div>
                  <p className="text-gray-300">
                    123 Education Avenue<br />
                    Garki District, Abuja<br />
                    Federal Capital Territory, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" style={{ color: '#FFD700' }} />
                <a 
                  href="tel:+2348123456789"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +234 812 345 6789
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" style={{ color: '#FFD700' }} />
                <a 
                  href="mailto:info@blueprintschools.edu.ng"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@blueprintschools.edu.ng
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 The Blueprint Schools. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}