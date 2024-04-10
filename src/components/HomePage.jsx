import SquareButton from './SquareButton';
import TriangleButton from './TriangleButton';
import ProfileCard from './ProfileCard';

const HomePage = () => {
  const styles = {
    backgroundColor: "#355070",
    minHeight: '100vh', // Ensure it covers the full height of the viewport
    minWidth: '100vw',
    display: 'flex', // Enables flexbox
    justifyContent: 'center', // Centers children along the main axis (vertical, in this case)
    alignItems: 'center', // 
  };

  return (
    <div style={ styles }>
      <ProfileCard/>
      <TriangleButton text="Achievements" orientation="top-left" path="/achievements"/>
      <TriangleButton text="Work Experience" orientation="bottom-right" path="/work-experience"/>

      <div style={{position: 'absolute', bottom: '10%',left: '10%'}}>
        <SquareButton text="About Me" path="/about"/>
      </div>
      <div style={{position: 'absolute', top: '10%',right: '10%'}}>
        <SquareButton text="Projects" path="/projects"/>
      </div>
    </div>
  );
};

export default HomePage;