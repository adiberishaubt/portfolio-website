import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Sogody & Cheil',
      position: 'QA Engineer - Project Based',
      location: 'Prishtina, Kosovo',
      period: '20/07/2026 – 14/08/2026',
      description: [
        'Featured new Samsung model launches and features across European markets, reviewing more than 1,000 QA links',
        'Performed manual testing using BrowserStack and supported automated testing workflows',
        'Contributed to A/B testing and quality assurance for launch content'
      ],
      technologies: ['Quality Assurance', 'BrowserStack', 'Manual Testing', 'A/B Testing']
    },
    {
      company: 'Central Election Commission',
      position: 'Administrative Staff',
      location: 'Prishtina, Kosovo',
      period: '21/05/2026 – 01/07/2026',
      description: [
        'Received sensitive electoral material, non-electoral administrative material and information technology after the completion of the count at the NCC',
        'Counted conditional, diaspora and VPNV ballots',
        'Recounted ballots based on the recommendation of the CEC, ECAP decisions and other decisions of judicial bodies',
        'Prepared and verified materials for scanning',
        'Used equipment (scanner and software) for scanning voter lists',
        'Ensured the quality of scanning and data storage'
      ],
      technologies: ['Data Management', 'Quality Assurance', 'Electoral Operations']
    },
    {
      company: 'UNICEF & Kosovo Agency of Statistics',
      position: 'Supervisor of Enumerators - MICS',
      location: 'Prishtina, Kosovo',
      period: '04/08/2025 – 08/11/2025',
      description: [
        'Coordinated, led and monitored the team\'s work in the field',
        'Supervised the correct implementation of the questionnaires',
        'Ensured the quality of the data collected',
        'Maintained daily communication and synchronization with UNICEF & KAS administrative staff'
      ],
      technologies: ['Team Leadership', 'Field Supervision', 'Data Quality']
    },
    {
      company: 'IPKO Telecommunications',
      position: 'Back Office Intern',
      location: 'Prishtina, Kosovo',
      period: '27/06/2024 – 26/09/2024',
      description: [
        'Maintenance of emails and business support',
        'Reactivating businesses services',
        'Knowledge of SAP system',
        'Knowledge of VCCE, JIRA tickets',
        'Knowledge of SQL commands'
      ],
      technologies: ['SAP', 'VCCE', 'JIRA', 'SQL']
    },
    {
      company: 'Kosovo Agency of Statistics',
      position: 'Census Enumerator',
      location: 'Prishtina, Kosovo',
      period: '14/04/2024 – 16/06/2024',
      description: [
        'Worked as a full-time census enumerator',
        'Had an important role in collecting data of registration for individuals, buildings and households'
      ],
      technologies: ['Data Collection', 'Field Work']
    },
    {
      company: 'Buzuku Bookstore/Publishing House',
      position: 'Sales and Organising Assistant of Bookfair',
      location: 'Prishtina, Kosovo',
      period: '05/06/2024 – 09/06/2024',
      description: [
        'Assistant of sales and duties of Buzuku publishing house and bookstore on 24th edition of Prishtina\'s book fair',
        'Activities included: selling books, organising new titles promotion, looking and assisting on bookfair\'s maintenance and potential problems',
        'Tried best on possibilities to serve the kosovar people\'s wants and needs'
      ],
      technologies: ['Sales', 'Event Organization', 'Customer Service']
    },
    {
      company: 'Buzuku Bookstore/Publishing House',
      position: 'Sales and Organising Assistant of Bookfair',
      location: 'Prishtina, Kosovo',
      period: '05/06/2023 – 11/06/2023',
      description: [
        'Assistant of sales and duties of Buzuku publishing house and bookstore on 23rd edition of Prishtina\'s book fair',
        'Activities included: selling books, organising new titles promotion, looking and assisting on bookfair\'s maintenance and potential problems',
        'Tried best on possibilities to serve the kosovar people\'s wants and needs'
      ],
      technologies: ['Sales', 'Event Organization', 'Customer Service']
    },
    {
      company: 'Buzuku Bookstore/Publishing House',
      position: 'Sales and Organising Assistant of Bookfair',
      location: 'Prishtina, Kosovo',
      period: '07/06/2022 – 12/06/2022',
      description: [
        'Assistant of sales and duties of Buzuku publishing house and bookstore on 22nd edition of Prishtina\'s book fair',
        'Activities included: selling books, organising new titles promotion, looking and assisting on bookfair\'s maintenance and potential problems',
        'Tried best on possibilities to serve the kosovar people\'s wants and needs'
      ],
      technologies: ['Sales', 'Event Organization', 'Customer Service']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="section-kicker">Where I've contributed</p>
          <h2 className="heading-primary">Work Experience</h2>
          <div className="section-rule"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-primary-600 font-medium">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{exp.location}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-body flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
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

export default Experience;
