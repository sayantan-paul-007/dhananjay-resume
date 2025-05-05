
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="section-container bg-gray-50 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-resume-primary border-b-2 border-resume-accent pb-2">Education</h2>
      
      <div className="space-y-6 animate-slide-up">
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <BookOpen className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">Master of Information Technology</h3>
                <p className="text-gray-600 mb-1">University of Mumbai</p>
                <p className="text-gray-700 text-sm">Recently Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <BookOpen className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">Bachelor of Science</h3>
                <p className="text-gray-600 mb-1">Maharashtra Board</p>
                <p className="text-gray-700 text-sm">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <BookOpen className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">Higher Secondary Certificate (H.S.C)</h3>
                <p className="text-gray-600 mb-1">Maharashtra Board</p>
                <p className="text-gray-700 text-sm">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-resume-light p-3 rounded-full">
                <BookOpen className="text-resume-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-resume-primary">Secondary School Certificate (S.S.C)</h3>
                <p className="text-gray-600 mb-1">Maharashtra Board</p>
                <p className="text-gray-700 text-sm">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
