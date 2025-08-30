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
          <h2 className="heading-primary">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Information */}
          <div className="space-y-6">
            <h3 className="heading-secondary">Personal Information</h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
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
                I am a passionate Computer Science and Engineering student at UBT College, driven by a 
                continuous desire to learn and grow in the field of technology. My journey began at a 
                natural sciences elite gymnasium in Prishtina, where I developed a strong foundation 
                in analytical thinking and problem-solving.
              </p>
              <p>
                Through dedicated study and hands-on practice, I've acquired solid programming skills 
                including HTML, CSS, and JavaScript fundamentals, as well as Java fundamentals. I've 
                expanded my expertise to include modern frameworks like React and .NET, along with 
                experience in PHP and WordPress development.
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
