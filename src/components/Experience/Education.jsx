import styles from '../../Styles/Experience/Education.module.css'

const Education = () => {
  const exp = {
      role: 'BEng (Honours) - Software',
      institution: 'The University of Auckland',
      duration: 'Mar 2020 - Nov 2023',
      details: [
        "GPA: 8.3/9 (A) - First Class Honours",
        "Dean’s Honours List, Top 5% of Engineering Students",
        "First in Course Award for ENGGEN 303 (Managing Projects and Innovation)",
        "First in Course Award for COMPSYS201 (Fundamentals of Computer Engineering)"
      ],
      scholarships: [
        "University of Auckland Top Achiever Scholarship",
        "Mathematics Summer Research Scholarship",
        "Google ExploreCSR research scholarship"
      ]
    };



  return (
    <div className={styles.experienceContainer}>
      <h2>Education Experience</h2>
        <div style={{marginLeft:"0%", marginRight:"0%"}} className={styles.experienceEntry}>
            <h3 className={styles.institution}>{exp.institution}</h3>
            <div className={styles.roleCompanyDuration}>
                <h3 className={styles.roleCompany}>{exp.role}</h3>
                <p className={styles.experienceDuration}>{exp.duration}</p>
            </div>
            <ul className={styles.detailList}>
            {exp.details.map((detail, index) => (
                <li className={styles.details} key={index}>{detail}</li>
            ))}
            </ul>
            <p className={styles.recipient}>Recipient of:</p>
            <ul className={styles.detailList}>
            {exp.scholarships.map((scholarship, index) => (
                <li className={styles.details} key={index}>{scholarship}</li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default Education;