import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AvailableClasses() {
  const classes = [
    {
      title: "Daycare",
      description: "Nurturing care for children aged 6 months to 2 years with Islamic values and early childhood development.",
      image: "https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMGFmcmljYXxlbnwxfHx8fDE3NTgzNzc1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ages: "6 months - 2 years",
      link: "/daycare"
    },
    {
      title: "Nursery",
      description: "Foundation learning with play-based activities, Quran recitation, and basic Islamic teachings for young minds.",
      image: "https://images.unsplash.com/photo-1589062909453-78ebda337cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZXJ5JTIwa2lkcyUyMGNsYXNzcm9vbSUyMGFmcmljYXxlbnwxfHx8fDE3NTgzNzc1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ages: "2 - 5 years",
      link: "/nursery"
    },
    {
      title: "Primary",
      description: "Comprehensive primary education combining Nigerian curriculum with Islamic studies, Arabic, and moral education.",
      image: "https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmltYXJ5JTIwc2Nob29sJTIwc3R1ZGVudHMlMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzc3NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ages: "6 - 11 years",
      link: "/primary"
    },
    {
      title: "College",
      description: "Advanced secondary education preparing students for university with strong Islamic foundation and academic excellence.",
      image: "https://images.unsplash.com/photo-1645263012665-8ca659af16dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBhZnJpY2ElMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc1ODM3NzUyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ages: "12 - 18 years",
      link: "/college"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: '#0047AB', fontWeight: '600' }}
          >
            Available Classes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From early childhood to college preparation, we offer comprehensive Islamic education 
            at every stage of your child's development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <ImageWithFallback
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 
                    className="text-xl"
                    style={{ color: '#0047AB', fontWeight: '600' }}
                  >
                    {cls.title}
                  </h3>
                  <span 
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: '#FFD700', color: '#0047AB' }}
                  >
                    {cls.ages}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {cls.description}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-blue-50 transition-colors"
                  style={{ borderColor: '#0047AB', color: '#0047AB' }}
                >
                  <a href={cls.link}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}