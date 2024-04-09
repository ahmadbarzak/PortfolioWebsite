import './App.css'
import SocialLink from './components/SocialLink';
import MenuButton from './components/MenuButton';

const App = () => {
  return (
    <div>
      <SocialLink iconPath="gmail.jpg" url="https://mail.google.com/"/>
      <MenuButton label="Achievements" orientation="top-left" onClick={() => alert('Navigate to Achievements!')} />
      <MenuButton label="About Me" orientation="bottom-right" onClick={() => alert('Navigate to About Me!')} />
    </div>
  );
};

export default App;