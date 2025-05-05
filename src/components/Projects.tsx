
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Database, Code, GitBranch } from 'lucide-react';

const Projects = () => {
  return (
    <section className="section-container bg-gray-50 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-resume-primary border-b-2 border-resume-accent pb-2">Academic Projects</h2>
      
      <div className="space-y-6 animate-slide-up">
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <Code className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">E-commerce Website Testing</h3>
                <p className="text-gray-600 mb-3">Academic Project</p>
                <p className="text-gray-700">
                  Conducted comprehensive testing of an e-commerce website using Selenium. 
                  Created test cases for user registration, login functionality, product search, 
                  cart operations, and checkout process. Identified and logged defects in a structured manner.
                </p>
                <div className="mt-3 flex flex-wrap">
                  <span className="skill-bubble">Selenium</span>
                  <span className="skill-bubble">Java</span>
                  <span className="skill-bubble">TestNG</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <Database className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">Database Testing Project</h3>
                <p className="text-gray-600 mb-3">Academic Project</p>
                <p className="text-gray-700">
                  Performed testing on a student management database system. Verified data integrity, 
                  validated SQL queries, and tested stored procedures. Created test scenarios for CRUD operations 
                  and generated comprehensive test reports.
                </p>
                <div className="mt-3 flex flex-wrap">
                  <span className="skill-bubble">SQL</span>
                  <span className="skill-bubble">Database Testing</span>
                  <span className="skill-bubble">Test Documentation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
