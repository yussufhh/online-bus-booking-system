import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home/>

      </div>
    </Router>
  );
}

export default App;
