import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Payments from './components/Payments';

function App() {
  return (
    <div className="w-4/5 mx-auto">
       <Navbar/>
       <Payments/>
    </div>
  );
}

export default App;
