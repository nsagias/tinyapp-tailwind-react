import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "./store";


export default function App() {

  const selectIsAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const [isAthenticated, setIsAuthenticated] = useState<boolean>(false);
  const isLoggedIn = isAthenticated ? 1 : 0;
  const rolelevel = 3;

  useEffect( () => {
    setIsAuthenticated(selectIsAuthenticated);
  }, [selectIsAuthenticated ]);

  const routesAuthList = [
    {path:"/features",  element:[<FeaturesPage />],     logginRequired: 0, role: 4},
    {path:"/pricing",   element:[<PricingPage />],      logginRequired: 0, role: 4},
    {path:"/docs",      element:[<DocsPage />],         logginRequired: 0, role: 4},
    {path:"/login",     element:[<LoginPage />],        logginRequired: 0, role: 4},
    {path:"/register",  element:[<RegistrationPage />], logginRequired: 0, role: 4},
    {path:"/shorturls", element:[<ShortenUrlPage isAuthenticated={isAthenticated} />], logginRequired: 1, role: 3},
    {path:"/shorturls/:id", element:[<ShortLinkPage />],logginRequired: 1, role: 3},
    {path:"/",          element:[<HomePage />],         logginRequired: 0, role: 4},
    {path:"*",          element:[<NotFoundPage />],     logginRequired: 0, role: 4},
  ];

  const routeAuth = routesAuthList && Array.isArray(routesAuthList) && routesAuthList.filter(x => x.logginRequired <= isLoggedIn).filter(x => x.role >= rolelevel).map((route, index) => (
    <Route path={`${route.path}`} element={route.element} key={index} />
  ));
  console.log("ROUTE AUTH", routeAuth);


  return (
    <div className="App">
      <NavBar isAthenticated={isAthenticated} />
        <Routes>
          {/* <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={ <DocsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/shorturls" element={<ShortenUrlPage isAuthenticated={isAthenticated} /> } />
          <Route path="/shorturls/:id" element={<ShortLinkPage />}/>
          <Route path="/" element={<HomePage />} /> 
          <Route path="*" element={<NotFoundPage />} /> */}

          {routeAuth}
        </Routes>
      <Footer authorized={true}/>
    </div>
  );
}
