import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: "Fatima Abdullahi",
      role: "Parent - Primary 5 Student",
      image: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFyZW50JTIwY2hpbGQlMjBzY2hvb2x8ZW58MXx8fHwxNzU4Mzc3NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The Blueprint Schools has transformed my daughter's life. The balance between Islamic values and modern education is exactly what I was looking for. The teachers are caring and professional.",
      rating: 5
    },
    {
      name: "Ahmed Musa",
      role: "College Graduate - Class of 2023",
      image: "https://images.unsplash.com/photo-1565490129165-bd6a24996c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbmlnZXJpYW4lMjBzdHVkZW50cyUyMHRleHRib29rcyUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4Mzc3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Studying at The Blueprint Schools prepared me well for university. The computer literacy program and Arabic classes gave me advantages over my peers. I'm grateful for the foundation I received here.",
      rating: 5
    },
    {
      name: "Khadija Ibrahim",
      role: "Parent - Nursery Student",
      image: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFyZW50JTIwY2hpbGQlMjBzY2hvb2x8ZW58MXx8fHwxNzU4Mzc3NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The nursery program is exceptional. My son loves going to school every day. The Islamic environment and the care he receives from teachers make me confident in my choice.",
      rating: 5
    },
    {
      name: "Usman Aliyu",
      role: "Parent - Primary 3 Student",
      image: "https://images.unsplash.com/photo-1613632453420-4144fff27cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFyZW50JTIwY2hpbGQlMjBzY2hvb2x8ZW58MXx8fHwxNzU4Mzc3NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "The transportation service is reliable and safe. The boarding facilities are excellent for students from other states. The school truly cares about every student's wellbeing and success.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: '#0047AB', fontWeight: '600' }}
          >
            What Families Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from parents and students who have 
            experienced the excellence of The Blueprint Schools firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-4 left-4">
                  <Quote 
                    className="h-8 w-8 opacity-20" 
                    style={{ color: '#FFD700' }}
                  />
                </div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 
                      className="text-lg"
                      style={{ color: '#0047AB', fontWeight: '600' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-current" 
                          style={{ color: '#FFD700' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our community of satisfied families?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const modal = document.getElementById('contact-modal') as HTMLDialogElement;
                modal?.showModal();
              }}
              className="px-8 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0047AB' }}
            >
              Schedule a Visit
            </button>
            <a 
              href="/testimonials"
              className="px-8 py-3 rounded-lg border-2 hover:bg-blue-50 transition-colors"
              style={{ borderColor: '#0047AB', color: '#0047AB' }}
            >
              Read More Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}