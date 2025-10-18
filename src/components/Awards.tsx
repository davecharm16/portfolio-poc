import React from 'react';
import { AwardIcon, GraduationCapIcon } from 'lucide-react';
export const Awards = () => {
  const awards = [{
    title: 'Best System Developer Student Award',
    organization: 'PHINMA - University of Pangasinan',
    year: '2024',
    description: 'Recognized for being top student in Systems Development Track of BS Information Technology'
  }, 
  {
    title: 'Green Bowl C++ Coding Champion',
    organization: 'PHINMA - University of Pangasinan',
    year: '2021',
    description: 'Awarded for exceptional contributions to open source projects'
  }
];
  const certifications = [{
    title: 'AWS Solutions Architect Professional',
    organization: 'Amazon Web Services',
    year: '2023',
    credentialId: 'AWS-SAP-123456'
  }, {
    title: 'Google Cloud Professional Developer',
    organization: 'Google Cloud',
    year: '2022',
    credentialId: 'GCP-DEV-789012'
  }, {
    title: 'React Native Specialist',
    organization: 'Meta',
    year: '2021',
    credentialId: 'RNS-345678'
  }];
  return <section id="awards" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Awards & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <AwardIcon className="text-blue-600" />
              Awards
            </h3>
            <div className="space-y-8">
              {awards.map((award, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-lg font-semibold mb-2">
                    {award.title}
                  </div>
                  <div className="text-blue-600 mb-2">{award.organization}</div>
                  <div className="text-gray-600 mb-2">{award.year}</div>
                  <p className="text-gray-700">{award.description}</p>
                </div>)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCapIcon className="text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-lg font-semibold mb-2">{cert.title}</div>
                  <div className="text-blue-600 mb-2">{cert.organization}</div>
                  <div className="text-gray-600 mb-2">{cert.year}</div>
                  <div className="text-sm text-gray-500">
                    ID: {cert.credentialId}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};