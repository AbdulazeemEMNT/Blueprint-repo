import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const openContactModal = () => {
    const modal = document.getElementById('contact-modal') as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" style={{ color: '#0047AB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#0047AB' }}>
                <span className="font-bold text-white">BP</span>
              </div>
              <span className="font-bold text-xl" style={{ color: '#0047AB' }}>The Blueprint Schools</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md hover:bg-blue-50 transition-colors" style={{ color: '#0047AB' }}>
                Home
              </a>
              
              {/* Academics Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('academics')}
                  className="px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center"
                  style={{ color: '#0047AB' }}
                >
                  Academics <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'academics' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border">
                    <a href="/daycare" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Daycare</a>
                    <a href="/nursery" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Nursery</a>
                    <a href="/primary" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Primary</a>
                    <a href="/college" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>College</a>
                  </div>
                )}
              </div>

              {/* Admission Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('admission')}
                  className="px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center"
                  style={{ color: '#0047AB' }}
                >
                  Admission <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'admission' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border">
                    <a href="/enquiry" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Enquiry</a>
                    <a href="/admission-fee" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Admission Fee</a>
                    <a href="/admission-process" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Admission Process</a>
                    <a href="/boarding-facilities" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Boarding Facilities</a>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center"
                  style={{ color: '#0047AB' }}
                >
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border">
                    <a href="/values-framework" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Values Framework</a>
                    <a href="/principal-address" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Principal Address</a>
                    <a href="/subjects-taught" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Subjects Taught</a>
                    <a href="/teachers" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Teachers</a>
                    <a href="/our-story" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Our Story</a>
                    <a href="/our-offers" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>Our Offers</a>
                    <a href="/faqs" className="block px-4 py-2 hover:bg-blue-50" style={{ color: '#0047AB' }}>FAQs</a>
                  </div>
                )}
              </div>

              <a href="#gallery" className="px-3 py-2 rounded-md hover:bg-blue-50 transition-colors" style={{ color: '#0047AB' }}>
                Gallery
              </a>
              
              <Button 
                onClick={openContactModal}
                className="text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#FFD700', color: '#0047AB' }}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              size="sm"
              style={{ color: '#0047AB' }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 rounded-md hover:bg-blue-50" style={{ color: '#0047AB' }}>Home</a>
              <a href="#academics" className="block px-3 py-2 rounded-md hover:bg-blue-50" style={{ color: '#0047AB' }}>Academics</a>
              <a href="#admission" className="block px-3 py-2 rounded-md hover:bg-blue-50" style={{ color: '#0047AB' }}>Admission</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-blue-50" style={{ color: '#0047AB' }}>About</a>
              <a href="#gallery" className="block px-3 py-2 rounded-md hover:bg-blue-50" style={{ color: '#0047AB' }}>Gallery</a>
              <Button 
                onClick={openContactModal}
                className="w-full text-left mt-2"
                style={{ backgroundColor: '#FFD700', color: '#0047AB' }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}