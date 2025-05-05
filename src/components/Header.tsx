
import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-resume-primary text-white py-8 md:py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Dhananjay Shukla</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-resume-accent">Software Tester</h2>
        
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-resume-accent" />
            <span>9372951592</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-resume-accent" />
            <span>shukladhananjay909@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-resume-accent" />
            <span>Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-resume-accent" />
            <span>02/08/2001</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
