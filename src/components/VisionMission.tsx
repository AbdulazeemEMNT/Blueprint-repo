import React from 'react';
import { Card, CardContent } from './ui/card';
import { Eye, Target } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: '#0047AB', fontWeight: '600' }}
          >
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by Islamic principles, we aim to create a generation of knowledgeable, 
            ethical, and successful individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="bg-white hover:shadow-xl transition-shadow duration-300 h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: '#0047AB' }}
                >
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 
                  className="text-2xl"
                  style={{ color: '#0047AB', fontWeight: '600' }}
                >
                  Our Vision
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To be the leading Islamic educational institution in Nigeria, recognized for academic excellence, 
                  moral integrity, and producing graduates who are confident, compassionate, and globally competitive.
                </p>
                <p className="text-gray-600">
                  We envision a future where our students become leaders in their fields while maintaining 
                  strong Islamic values and contributing positively to society.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-white hover:shadow-xl transition-shadow duration-300 h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: '#FFD700' }}
                >
                  <Target className="h-8 w-8" style={{ color: '#0047AB' }} />
                </div>
                <h3 
                  className="text-2xl"
                  style={{ color: '#0047AB', fontWeight: '600' }}
                >
                  Our Mission
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To provide quality Islamic education that integrates contemporary learning with traditional 
                  Islamic values, fostering academic excellence, character development, and spiritual growth.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#FFD700' }}></span>
                    Nurture Islamic identity and values
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#FFD700' }}></span>
                    Promote academic excellence and critical thinking
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mr-3 mt-2" style={{ backgroundColor: '#FFD700' }}></span>
                    Develop responsible global citizens
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}