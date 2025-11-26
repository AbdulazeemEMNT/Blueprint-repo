import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { X, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Message sent successfully! We will get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Close modal
    const modal = document.getElementById('contact-modal') as HTMLDialogElement;
    modal?.close();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    const modal = document.getElementById('contact-modal') as HTMLDialogElement;
    modal?.close();
  };

  return (
    <dialog id="contact-modal" className="modal rounded-lg shadow-2xl max-w-2xl w-full mx-auto backdrop:bg-black backdrop:bg-opacity-50">
      <div className="bg-white rounded-lg p-0 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ backgroundColor: '#0047AB' }}>
          <h2 className="text-2xl text-white font-semibold">Contact The Blueprint Schools</h2>
          <button 
            onClick={closeModal}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="border-gray-300 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="admission">Admission Inquiry</option>
                <option value="daycare">Daycare Program</option>
                <option value="nursery">Nursery Program</option>
                <option value="primary">Primary Education</option>
                <option value="college">College Program</option>
                <option value="facilities">School Facilities</option>
                <option value="transportation">Transportation</option>
                <option value="boarding">Boarding Facilities</option>
                <option value="fees">School Fees</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border-gray-300 focus:border-blue-500"
              placeholder="Please provide details about your inquiry..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="submit"
              className="flex-1 text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#0047AB' }}
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <Button 
              type="button"
              variant="outline"
              onClick={closeModal}
              className="flex-1 hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#0047AB', color: '#0047AB' }}
            >
              Cancel
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-b-lg">
          <h3 className="font-semibold mb-4" style={{ color: '#0047AB' }}>
            Or reach us directly:
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <strong>Phone:</strong><br />
              +234 812 345 6789
            </div>
            <div>
              <strong>Email:</strong><br />
              info@blueprintschools.edu.ng
            </div>
            <div>
              <strong>Address:</strong><br />
              123 Education Avenue, Garki, Abuja
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}