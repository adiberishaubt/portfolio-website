import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      category: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'React Native']
    },
    {
      category: 'Backend Development',
      skills: ['PHP', 'Java', 'WordPress', 'Node.js', '.NET']
    },
    {
      category: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'PHP', 'Kotlin', 'TypeScript']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'SVN', 'Microsoft Office']
    },
    {
      category: 'Other Technologies',
      skills: ['SAP', 'VCCE', 'JIRA', 'SQL']
    }
  ];

  const languageSkills = [
    {
      language: 'Albanian',
      level: 'Native',
      proficiency: 'C2',
      skills: ['Listening', 'Reading', 'Speaking', 'Writing']
    },
    {
      language: 'English',
      level: 'Advanced',
      proficiency: 'C1',
      skills: ['Listening', 'Reading', 'Spoken production', 'Spoken interaction', 'Writing']
    },
    {
      language: 'Turkish',
      level: 'Intermediate',
      proficiency: 'B1-B2',
      skills: ['Listening (B2)', 'Reading (B2)', 'Spoken production (B1)', 'Spoken interaction (B1)', 'Writing (B1)']
    }
  ];

  const proficiencyLevels = {
    'A1': 'Basic User',
    'A2': 'Basic User',
    'B1': 'Independent User',
    'B2': 'Independent User',
    'C1': 'Proficient User',
    'C2': 'Proficient User'
  };

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="section-kicker">Tools I use</p>
          <h2 className="heading-primary">Skills & Languages</h2>
          <div className="section-rule"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="heading-secondary mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div key={index} className="card">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-primary-100 text-primary-700 text-sm rounded-lg font-medium hover:bg-primary-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div>
            <h3 className="heading-secondary mb-8">Language Skills</h3>
            <div className="space-y-6">
              {languageSkills.map((lang, index) => (
                <div key={index} className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {lang.language}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full font-medium">
                        {lang.proficiency}
                      </span>
                      <span className="text-sm text-gray-600">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Level:</span> {proficiencyLevels[lang.proficiency as keyof typeof proficiencyLevels]}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {lang.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{skill}</span>
                        <span className="text-xs text-gray-500">
                          {skill.includes('B2') ? 'B2' : skill.includes('B1') ? 'B1' : lang.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
