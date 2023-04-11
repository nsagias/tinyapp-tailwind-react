import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footerSection/Footer";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/home/HomePage";
import FeaturesPage from "./pages/features/FeaturesPage";
import PricingPage from "./pages/pricing/PricingPage";
import DocsPage from "./pages/documentation/DocsPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import ShortenUrlPage from "./pages/shortenUrls/ShortenUrlPage";
import ShortLinkPage from "./pages/shortLinks/ShortLinkPage";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";

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
    {path:"/", element:"<HomeContainer", isLoggedIn: isLoggedIn }, 
    {path:"*", element:"<NotFound"},
  ];

  return (
    <div className="App">
      <NavBar authorized={isLoggedIn} />
        <Routes>
        
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={ <DocsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/shorturls" element={<ShortenUrlPage /> } />
          <Route path="/shorturls/:id" element={<ShortLinkPage />}/>
          <Route path="/" element={<HomePage />} /> 
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      <Footer authorized={true}/>
    </div>
  );
}
