import { useState } from 'react';
import './App.css';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/footerSection/Footer';
import Hero from './components/heroSection/Hero';
import MarketingSectionContainer from './components/marketing/MarketingSectionContainer';
import NavBar from './components/navBar/NavBar';
import ShortenSection from './components/shortenSection/ShortenSection';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className="App">
      <NavBar authorized={isLoggedIn} />
      <Hero authorized={isLoggedIn} />
      {isLoggedIn && (<ShortenSection />)}
      {!isLoggedIn && (<MarketingSectionContainer />)}
      {!isLoggedIn && ( <CTASection />)}
      <Footer authorized={isLoggedIn} />
    </div>
  );
}
