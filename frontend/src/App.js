import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Signup from './components/user/signup/Signup';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Signup/>
    </div>
  );
}

export default App;
