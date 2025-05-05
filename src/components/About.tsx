
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-resume-primary border-b-2 border-resume-accent pb-2">About Me</h2>
      
      <Card className="card-hover">
        <CardContent className="pt-6">
          <p className="text-gray-700 leading-relaxed">
            I am a fresher who has recently completed my Masters of Information Technology degree and am 
            actively seeking full-time opportunities in software testing. Currently enhancing my skills in 
            Selenium and other testing tools, I am passionate about ensuring software quality and reliability. 
            As a quick learner with strong analytical skills, I am ready to apply my education to real-world 
            testing environments.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="card-hover">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-resume-primary mb-3">Personal Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Full Name:</span>
                <span>Shukla Dhananjay</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Date of Birth:</span>
                <span>02/08/2001</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Gender:</span>
                <span>Male</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Marital Status:</span>
                <span>Unmarried</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Nationality:</span>
                <span>Indian</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Religion:</span>
                <span>Hindu</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-resume-primary mb-3">Contact Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>+919372951592</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span className="break-all">shukladhananjay909@gmail.com</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
