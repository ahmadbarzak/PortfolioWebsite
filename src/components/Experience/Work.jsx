import styles from './Work.module.css'; // Make sure to create a corresponding CSS file

const Work = () => {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Serato',
      duration: 'Nov 2022 - Feb 2023',
      details: "Worked on tickets and bugs for Serato's DJ" +
       " Software using C++, and automation testing with Python,"
       + " Bash and Azure Devops. These tasks involved heavy debugging" +
       " with Visual Studio and Xcode, ranging from fixing audio bugs in" +
       " the software to helping update the software to the C++17 standard."
    },
    {
      role: 'Research Assistant for the Mathematics Department',
      company: 'University of Auckland',
      duration: 'Dec 2021 - Mar 2022',
      details:
        "Underwent a research project in Cryptography under the supervision of Mathematics Professor Tomasz Popiel."
        + " Discovered significant errors in previous research by combining research skills with Linear Algebra and Combinatorics."
    }
  ];

  return (
    <div className={styles.experienceContainer}>
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{marginLeft:"2.5%", marginRight:"2.5%"}} className={styles.experienceEntry}>
            <div style={{marginLeft:"6px"}} className={styles.roleCompanyDuration}>
                <h3 className={styles.roleCompany}>{exp.role} - {exp.company}</h3>
                <p className={styles.experienceDuration}>{exp.duration}</p>
            </div>
            <p style={{marginLeft:"6px"}}>{exp.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Work;