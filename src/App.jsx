import './App.css';
import SquareButton from './components/SquareButton';
import TriangleButton from './components/TriangleButton';
import ProfileCard from './components/ProfileCard';

const App = () => {
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
      <TriangleButton text="Achievements" orientation="top-left" onClick={() => console.log("howdy")}/>
      <TriangleButton text="Work Experience" orientation="bottom-right" onClick={() => console.log("hey")}/>

      <div style={{position: 'absolute', bottom: '10%',left: '10%'}}>
        <SquareButton text="About Me" onClick={() => console.log("Button clicked")}/>
      </div>
      <div style={{position: 'absolute', top: '10%',right: '10%'}}>
        <SquareButton text="Projects" onClick={() => console.log("Button clicked")}/>
      </div>
    </div>
  );
};

export default App;