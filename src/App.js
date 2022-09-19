import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Map from './components/map';
import Signup from './components/signup';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
