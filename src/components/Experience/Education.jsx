import styles from './Education.module.css'; // Make sure to create a corresponding CSS file

const Education = () => {
  const exp = {
      role: 'Bachelor of Engineering (Honours) in Software Engineering',
      institution: 'University of Auckland',
      duration: 'Mar 2020 - Nov 2023',
      details: [
        "GPA: 8.3/9 (A) - First Class Honours",
        "Dean’s Honours List, Top 5% of Engineering Students",
        "First in Course Award for ENGGEN 303 (Managing Projects and Innovation)",
        "First in Course Award for COMPSYS201 (Fundamentals of Computer Engineering)",
        "Recipient of:",
        "University of Auckland Top Achiever Scholarship",
        "Mathematics Summer Research Scholarship",
        "Google ExploreCSR research scholarship"
      ]
    };



  return (
    <div className={styles.experienceContainer}>
      <h2>Education Experience</h2>
        <div style={{marginLeft:"2.5%", marginRight:"2.5%"}} className={styles.experienceEntry}>
            <div style={{marginLeft:"6px"}} className={styles.roleCompanyDuration}>
                <h3 className={styles.roleCompany}>{exp.role} - {exp.company}</h3>
                <p className={styles.experienceDuration}>{exp.duration}</p>
            </div>
            <ul>
            {exp.details.map((detail, index) => (
                <li style={{marginLeft:"6px"}} key={index}>{detail}</li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default Education;