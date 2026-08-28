import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Kolegji UBT - Higher Education Institute',
      degree: 'Student of Computer Science and Engineering',
      location: 'Prishtina, Kosovo',
      period: '18/10/2022 - Present',
      grade: '8.18/10',
      website: 'ubt-uni.net',
      field: 'Computer Science and Engineering',
      note: 'Currently completing my final coursework - 4 exams remaining until graduation.'
    },
    {
      institution: 'Shkolla Digjitale - Digital School',
      degree: 'React Native Developer',
      location: 'Prishtina, Kosovo',
      period: '11/2023 - 01/2024',
      grade: 'Completed',
      website: 'shkolladigjitale.com',
      field: 'Mobile Development'
    },
    {
      institution: 'Shkolla Digjitale - Digital School',
      degree: 'Java Developer',
      location: 'Kosovo',
      period: '09/2023 - 11/2023',
      grade: 'Completed',
      website: 'shkolladigjitale.com',
      field: 'Backend Development'
    },
    {
      institution: 'Shkolla Digjitale - Digital School',
      degree: 'Back-End Programming (PHP, WordPress)',
      location: 'Prishtina, Kosovo',
      period: '12/09/2022 - 12/05/2023',
      grade: 'Completed',
      website: 'shkolladigjitale.com',
      field: 'Backend Development'
    },
    {
      institution: 'Shkolla Digjitale - Digital School',
      degree: 'Front-End Programming (HTML, CSS and JavaScript)',
      location: 'Prishtina, Kosovo',
      period: '21/12/2021 - 01/06/2022',
      grade: 'Completed',
      website: 'shkolladigjitale.com',
      field: 'Frontend Development'
    },
    {
      institution: 'Cacttus Education',
      degree: 'Introduction to Java Programming Fundamentals',
      location: 'Prishtina, Kosovo',
      period: '01/03/2022 - 03/06/2022',
      grade: 'Completed',
      website: 'cacttus.com',
      field: 'Programming Language, Back-End Development, Object-Oriented Programming'
    },
    {
      institution: 'Sami Frasheri Gymnasium',
      degree: 'High School Graduate',
      location: 'Prishtina, Kosovo',
      period: '01/09/2019 - 01/06/2022',
      grade: '4.82',
      website: '',
      field: 'Natural sciences, mathematics and statistics'
    },
    {
      institution: 'Meto Bajraktari School',
      degree: 'Primary School Graduate',
      location: 'Prishtina',
      period: '01/09/2010 - 01/06/2019',
      grade: '5.0',
      website: '',
      field: 'General Education'
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="section-kicker">Learning journey</p>
          <h2 className="heading-primary">Education & Training</h2>
          <div className="section-rule"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className={`card ${index === 0 ? 'border-primary-200 bg-gradient-to-br from-primary-50 via-white to-cyan-50/60' : ''}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className={`mt-2 flex h-3 w-3 flex-shrink-0 rounded-full ${index === 0 ? 'bg-primary-600 ring-4 ring-primary-100' : 'bg-accent-400'}`}></div>
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                        {edu.degree}
                        </h3>
                        {index === 0 && <span className="tag">In progress</span>}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-accent-600 font-medium">{edu.institution}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{edu.location}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Field:</span> {edu.field}
                      </p>

                      {'note' in edu && edu.note && (
                        <p className="mb-4 max-w-2xl rounded-xl border border-primary-100 bg-white/80 px-4 py-3 text-sm font-medium leading-relaxed text-primary-800">
                          {edu.note}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">Final grade:</span>
                          <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full font-medium">
                            {edu.grade}
                          </span>
                        </div>
                        
                        {edu.website && (
                          <a
                            href={`https://${edu.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-600 hover:text-accent-700 text-sm font-medium transition-colors duration-200"
                          >
                            Visit Website →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
