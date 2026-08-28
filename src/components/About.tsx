import React from 'react';

const About: React.FC = () => {
  const personalInfo = [
    { label: 'Date of Birth', value: '19/08/2004' },
    { label: 'Nationality', value: 'Kosovar' },
    { label: 'Phone', value: '(+383) 48410409' },
    { label: 'Email', value: 'adii.berisha2004@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/adi-berisha' },
    { label: 'Address', value: 'Arberi, 10000, Pristina, Kosovo' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="section-kicker">A little more about me</p>
          <h2 className="heading-primary">About Me</h2>
          <div className="section-rule"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Information */}
          <div className="space-y-6">
            <h3 className="heading-secondary">Personal Information</h3>
            <div className="space-y-3">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-primary-100 hover:bg-primary-50/50">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary-500"></div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">{info.label}:</span>
                    {info.label === 'Email' ? (
                      <a 
                        href={`mailto:${info.value}`}
                        className="ml-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : info.label === 'LinkedIn' ? (
                      <a 
                        href={`https://${info.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="ml-2 text-gray-600">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - About Text */}
          <div className="space-y-6">
            <h3 className="heading-secondary">My Story</h3>
            <div className="space-y-4 text-body">
              <p>
                I am a Computer Science and Engineering student at UBT College, currently four exams away from completing my degree. I am driven by continuous learning and a desire to turn solid technical foundations into useful, well-crafted digital experiences.
              </p>
              <p>
                Alongside my studies, I have built practical experience in quality assurance, IT operations, data quality, and team supervision. I also work with modern web technologies including React, Next.js, TypeScript, Java, PHP, and SQL.
              </p>
              <p>
                My ultimate goal is to become a proficient developer with a broad range of skills, 
                making a positive impact on the Computer Science Society in Kosovo and beyond. I 
                believe in the power of technology to solve real-world problems and improve people's lives.
              </p>
              <p>
                I possess strong discipline, teamwork spirit, and a solid educational foundation. 
                I'm always eager to connect with professionals in the field for collaboration, 
                learning opportunities, and meaningful projects that challenge and inspire me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
