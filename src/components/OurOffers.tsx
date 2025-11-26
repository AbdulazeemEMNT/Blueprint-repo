import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  Computer, 
  Languages, 
  Heart, 
  Trees, 
  GraduationCap, 
  BookOpen, 
  Bus 
} from 'lucide-react';

export function OurOffers() {
  const offers = [
    {
      icon: Computer,
      title: "Computer Literacy",
      description: "Modern computer education and digital literacy programs to prepare students for the digital age."
    },
    {
      icon: Languages,
      title: "Arabic & French Language",
      description: "Comprehensive language education in Arabic for Islamic studies and French for global communication."
    },
    {
      icon: Heart,
      title: "Medical & Counselling Services",
      description: "Professional medical care and psychological counselling services for student wellbeing."
    },
    {
      icon: Trees,
      title: "Green Learning Environment",
      description: "Eco-friendly campus with beautiful gardens and clean, healthy learning spaces."
    },
    {
      icon: GraduationCap,
      title: "Experienced Teachers",
      description: "Blend of seasoned, certified, and experienced educators dedicated to student success."
    },
    {
      icon: BookOpen,
      title: "Appropriate Teaching Methods",
      description: "Age-appropriate and level-specific teaching methodologies for effective learning."
    },
    {
      icon: Bus,
      title: "Transportation & Boarding",
      description: "Safe transportation services and comfortable boarding facilities for students."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: '#0047AB', fontWeight: '600' }}
          >
            Our Unique Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive educational services and facilities designed to support 
            every aspect of your child's development and learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offers.slice(0, 4).map((offer, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#FFD700' }}
                >
                  <offer.icon className="h-8 w-8" style={{ color: '#0047AB' }} />
                </div>
                <h3 
                  className="text-lg mb-3"
                  style={{ color: '#0047AB', fontWeight: '600' }}
                >
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {offers.slice(4).map((offer, index) => (
            <Card key={index + 4} className="bg-white hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#FFD700' }}
                >
                  <offer.icon className="h-8 w-8" style={{ color: '#0047AB' }} />
                </div>
                <h3 
                  className="text-lg mb-3"
                  style={{ color: '#0047AB', fontWeight: '600' }}
                >
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in learning more about our comprehensive educational offerings?
          </p>
          <a 
            href="/our-offers"
            className="inline-block px-8 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#0047AB' }}
          >
            Explore All Our Offers
          </a>
        </div>
      </div>
    </section>
  );
}