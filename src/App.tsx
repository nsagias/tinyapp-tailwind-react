import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Footer from "./components/footerSection/Footer";
import NavBar from "./components/navBar/NavBar";
import ShortenSection from "./components/shortenSection/ShortenSection";
import Login from "./components/loginSection/LoginContainer";
import RegistrationContainter from "./components/registrationSection/RegistrationContainer";
import HomeContainer from "./components/home/HomeContainer";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Docs from "./components/documentation/Docs";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <NavBar authorized={isLoggedIn} />
        <Routes>
        
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={ <Docs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationContainter />} />
          <Route path="/shorturls" element={ <ShortenSection />} />
          <Route path="/" element={<HomeContainer isLoggedIn={isLoggedIn} />} /> 

        </Routes>
      <Footer authorized={true}/>
    </div>
  );
}
