import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/FooterSection/Footer";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/Home/HomePage";
import FeaturesPage from "./pages/Features/FeaturesPage";
import PricingPage from "./pages/Pricing/PricingPage";
import DocsPage from "./pages/Documentation/DocsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ShortenUrlPage from "./pages/ShortenUrls/ShortenUrlPage";
import ShortLinkPage from "./pages/ShortLinks/ShortLinkPage";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
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
    {id: 1, path:"/features",  element:[<FeaturesPage />],     logginRequired: 0, role: 4},
    {id: 2, path:"/pricing",   element:[<PricingPage />],      logginRequired: 0, role: 4},
    {id: 3, path:"/docs",      element:[<DocsPage />],         logginRequired: 0, role: 4},
    {id: 4, path:"/login",     element:[<LoginPage />],        logginRequired: 0, role: 4},
    {id: 5, path:"/register",  element:[<RegistrationPage />], logginRequired: 0, role: 4},
    {id: 6, path:"/shorturls", element:[<ShortenUrlPage isAuthenticated={isAthenticated} />], logginRequired: 1, role: 3},
    {id: 7, path:"/shorturls/:id", element:[<ShortLinkPage />],logginRequired: 1, role: 3},
    {id: 8, path:"/",          element:[<HomePage />],         logginRequired: 0, role: 4},
    {id: 9, path:"*",          element:[<NotFoundPage />],     logginRequired: 0, role: 4},
  ];

  const routeAuth = routesAuthList && Array.isArray(routesAuthList) && routesAuthList.filter(x => x.logginRequired <= isLoggedIn).filter(x => x.role >= rolelevel).map((route) => (
    <Route path={`${route.path}`} element={route.element} key={route.id} />
  ));

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
