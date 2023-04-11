import { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import CTASection from './components/CTASection/CTASection';
import Footer from './components/footerSection/Footer';
import Hero from './components/heroSection/Hero';
import MarketingSectionContainer from './components/marketing/MarketingSectionContainer';
import NavBar from './components/navBar/NavBar';
import ShortenSection from './components/shortenSection/ShortenSection';
import Login from './components/loginSection/LoginContainer';
import RegisterContainter from './components/registrationSection/RegistrationContainer';
import HomeContainer from './components/home/HomeContainer';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className="App">
      <NavBar authorized={isLoggedIn} />
      <Hero authorized={isLoggedIn} />
      {/* <Login /> */}
      {/* <RegisterContainter /> */}
      {/* <ShortenSection /> */}
      <HomeContainer />
      <Footer authorized={true}/>
    <Routes></Routes>
    </div>
  );
}
