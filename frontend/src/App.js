import './App.css';
import Capsules from './components/Capsules';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Capsules />
      <Footer />
    </div>
  );
}

export default App;
