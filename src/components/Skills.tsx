
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const testingSkills = [
    "Selenium", 
    "Manual Testing", 
    "Test Cases", 
    "Regression Testing", 
    "Test Planning", 
    "Functional Testing"
  ];
  
  const technicalSkills = [
    "Python", 
    "HTML/CSS", 
    "TestNG", 
    "JavaScript"
  ];
  
  const softSkills = [
    "Problem Solving", 
    "Analytical Thinking", 
    "Attention to Detail", 
    "Communication", 
    "Time Management", 
    "Teamwork"
  ];

  return (
    <section className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-resume-primary border-b-2 border-resume-accent pb-2">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
        <Card className="card-hover">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-resume-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-resume-secondary" />
              Testing Skills
            </h3>
            <div className="flex flex-wrap">
              {testingSkills.map((skill, index) => (
                <span key={index} className="skill-bubble">{skill}</span>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-resume-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-resume-secondary" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-bubble">{skill}</span>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-resume-primary mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-resume-secondary" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-bubble">{skill}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
