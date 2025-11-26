import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwYWZyaWNhfGVufDF8fHx8MTc1ODM3NzUyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Interactive Learning Session"
    },
    {
      src: "https://images.unsplash.com/photo-1695060613910-ebdd02b8f45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmYWNpbGl0aWVzJTIwY29tcHV0ZXIlMjBsYWIlMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzc3NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Computer Laboratory"
    },
    {
      src: "https://images.unsplash.com/photo-1565490129165-bd6a24996c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbmlnZXJpYW4lMjBzdHVkZW50cyUyMHRleHRib29rcyUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4Mzc3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Happy Students"
    },
    {
      src: "https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMGFmcmljYXxlbnwxfHx8fDE3NTgzNzc1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Early Learning Center"
    },
    {
      src: "https://images.unsplash.com/photo-1722807797686-6d9e4041f534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMG5pZ2VyaWElMjBhZnJpY2F8ZW58MXx8fHwxNzU4Mzc3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "School Campus"
    },
    {
      src: "https://images.unsplash.com/photo-1589062909453-78ebda337cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZXJ5JTIwa2lkcyUyMGNsYXNzcm9vbSUyMGFmcmljYXxlbnwxfHx8fDE3NTgzNzc1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Nursery Classroom"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: '#0047AB', fontWeight: '600' }}
          >
            School Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our modern facilities, vibrant classrooms, 
            and the joyful learning experiences of our students.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <ImageWithFallback
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="/gallery"
            className="inline-block px-8 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#0047AB' }}
          >
            View Complete Gallery
          </a>
        </div>
      </div>
    </section>
  );
}