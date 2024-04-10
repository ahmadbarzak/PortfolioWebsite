import './App.css'
import AutoSizingText from './components/AutoSizingText';
import SocialLink from './components/SocialLink';
import TriangleButton from './components/TriangleButton';
// import TriangleButton from './components/TriangleButton';

const App = () => {
  return (
    <div>
      <SocialLink iconPath="gmail.jpg" url="https://mail.google.com/"/>
      {/* <TriangleButton text="Abo utwew ewewedwv ewxw Me"/> */}
      <TriangleButton text="About Me" orientation="top-left" onClick={() => console.log("howdy")}/>
      <TriangleButton text="Achievements" orientation="bottom-right" onClick={() => console.log("hey")}/>
      <AutoSizingText text="Hello World!"/> 
    </div>
  );
};

export default App;