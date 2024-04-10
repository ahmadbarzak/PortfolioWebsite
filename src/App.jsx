import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/achievements" element={<h1>Achievements</h1>} />
        <Route path="/work-experience" element={<h1>Work Experience</h1>} />
      </Routes>
    </Router>
  );
};

export default App;