
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resume-primary text-white py-6 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p>© {currentYear} Dhananjay Shukla</p>
        <p className="text-sm mt-2 text-resume-accent">Software Tester | Selenium Specialist</p>
      </div>
    </footer>
  );
};

export default Footer;
