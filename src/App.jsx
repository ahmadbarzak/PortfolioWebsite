import './App.css'
import SocialLink from './components/SocialLink';


const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SocialLink iconPath="gmail.jpg" url="https://mail.google.com/"/>
    </div>
  );
};

export default App;