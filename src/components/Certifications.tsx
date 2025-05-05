
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="section-container bg-gray-50 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-resume-primary border-b-2 border-resume-accent pb-2">Certifications</h2>
      
      <div className="space-y-6 animate-slide-up">
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <Award className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">Data Analytics Job Simulation</h3>
                <p className="text-gray-600 mb-3">Certificate of Completion | May 5th, 2025</p>
                
                <p className="text-gray-700 mb-2">
                  Over the period of May 2025, Dhananjay Shukla has completed practical tasks in:
                </p>
                <ul className="list-disc pl-5 mb-3 text-gray-700">
                  <li>Data analysis</li>
                  <li>Forensic technology</li>
                </ul>
                
                <div className="mt-3 border-t pt-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tina McCreery</p>
                      <p className="text-sm text-gray-600">Chief Human Resources Officer, Deloitte</p>
                    </div>
                    <img 
                      src="/lovable-uploads/5113fdff-3f94-4581-b064-809ebe055e4f.png" 
                      alt="Deloitte Logo" 
                      className="h-8" 
                    />
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-dashed text-xs text-gray-500">
                  <p>Issued by Forage</p>
                  <p>Enrolment Verification Code: 4FJXkAKF9QX8RZSPN</p>
                  <p>User Verification Code: yE5uQNKJNpMWDxYeM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        
      </div>
    </section>
  );
};

export default Certifications;
