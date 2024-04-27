import styles from '../../Styles/Experience/Leadership.module.css';

const Leadership = () => {
  const leadershipExperiences = [
    {
      title: 'Velocity Finalist',
      organization: 'University of Auckland',
      duration: 'May 2022 - Oct 2022',
      details: 'Co-led a team of three for the EchoRadar initiative: Monitoring and safeguarding endangered Maui dolphins, urging fishers to adopt sustainable practices and reduce bycatch.'
    },
    {
      title: 'Robogals Lead Volunteer',
      organization: 'University of Auckland',
      duration: 'Mar 2022 - Present',
      details: 'Organised and led scratch and robotics workshops in primary schools to help build Youth interest in STEM subjects.'
    },
    {
      title: 'Tuākana Engineering Lead Tutor',
      organization: 'University of Auckland',
      duration: 'Mar 2022 - Present',
      details: 'Helping Māori and Pasifika students transition into Engineering by leading workshops for their courses, acting as mentors to help them shape their futures.'
    }
  ];

  return (
    <div className={styles.leadershipContainer}>
      <h2>Leadership Experience</h2>
      {leadershipExperiences.map((exp, index) => (
        <div key={index} className={styles.experienceEntry}>
          <div className={styles.titleOrganizationDuration}>
            <h3 className={styles.titleOrganization}>{exp.title} - {exp.organization}</h3>
            <p className={styles.experienceDuration}>{exp.duration}</p>
          </div>
          <p className={styles.detailItem}>{exp.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Leadership;