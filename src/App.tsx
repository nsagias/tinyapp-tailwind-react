import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footerSection/Footer";
import NavBar from "./components/navBar/NavBar";
import ShortenSection from "./components/shortenSection/ShortenSection";
import Login from "./components/loginSection/LoginContainer";
import RegistrationContainter from "./components/registrationSection/RegistrationContainer";
import HomeContainer from "./pages/home/Home";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import Docs from "./pages/documentation/Docs";
import ShortLinkSection from "./components/ShortLinkSection/ShortLinkSection";
import NotFound from "./components/routeComponents/NotFound";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const routesAuth = [
    {path:"/features", element:"Features"},
    {path:"/pricing", element:"Pricing"},
    {path:"/docs", element:"Docs"},
    {path:"/login", element:"Login"},
    {path:"/register", element:"RegistrationContainter"},
    {path:"/shorturls", element:"ShortenSection", isLoggedIn: isLoggedIn},
    {path:"/shorturls/:id", element:"ShortLinkSection", isLoggedIn: isLoggedIn},
    {path:"/", element:"<HomeContaine", isLoggedIn: isLoggedIn }, 
    {path:"*", element:"<NotFound"},
  ];

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
          <Route path="/shorturls/:id" element={ <ShortLinkSection />} />
          <Route path="/" element={<HomeContainer />} /> 
          <Route path="*" element={<NotFound />} />

        </Routes>
      <Footer authorized={true}/>
    </div>
  );
}
