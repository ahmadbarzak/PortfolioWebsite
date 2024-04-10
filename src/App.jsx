import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedRoute from './components/AnimatedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AnimatedRoute><HomePage /></AnimatedRoute>} />
        <Route path="/about" element={<AnimatedRoute><h1>About</h1></AnimatedRoute>} />
        <Route path="/projects" element={<AnimatedRoute><h1>Projects</h1></AnimatedRoute>} />
        <Route path="/achievements" element={<AnimatedRoute><h1>Achievements</h1></AnimatedRoute>} />
        <Route path="/work-experience" element={<AnimatedRoute><h1>Work Experience</h1></AnimatedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;