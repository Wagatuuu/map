import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Map from './components/map';
import Signup from './components/signup';
import Login from './components/login';
import Upload from './components/upload';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
