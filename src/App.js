import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Movies from './Components/Movies';
import Routing from './Routing/Routing';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routing />
     <Footer />
    </div>
  );
}

export default App;
