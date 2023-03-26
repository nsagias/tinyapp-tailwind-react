import './App.css';
import Hero from './components/heroSection/Hero';
import NavBar from './components/navBar/NavBar';
import ShortenSection from './components/shortenSection/ShortenSection';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ShortenSection />
    </div>
  );
}
