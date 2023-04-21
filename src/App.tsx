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

  useEffect( () => {
    setIsAuthenticated(selectIsAuthenticated);
  }, [selectIsAuthenticated ]);
  // const routesAuthList = [
  //   {path:"/features", element:[<FeaturesPage />], logginRequired: isLoggedIn},
  //   {path:"/pricing", element:[<PricingPage />],logginRequired: isLoggedIn},
  //   {path:"/docs", element:[<DocsPage />], logginRequired: isLoggedIn},
  //   {path:"/login", element:[<LoginPage />], logginRequired: isLoggedIn},
  //   {path:"/register", element:[<RegistrationPage />],logginRequired: isLoggedIn},
  //   {path:"/shorturls", element:[<ShortenUrlPage />], logginRequired: isLoggedIn},
  //   {path:"/shorturls/:id", element:[<ShortLinkPage />], logginRequired: isLoggedIn},
  //   {path:"/", element:[<HomePage />], ilogginRequired: isLoggedIn }, 
  //   {path:"*", element:[<NotFoundPage />], logginRequired: isLoggedIn},
  // ];
  // const routeAuth =  routesAuthList && Array.isArray(routesAuthList) && routesAuthList.map((route, index) => (
  //   <Route path={`${route.path}`} element={route.element} key={index} />
  // ));

  return (
    <div className="App">
      <NavBar authorized={isAthenticated} />
        <Routes>
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={ <DocsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/shorturls" element={<ShortenUrlPage isAuthenticated={isAthenticated} /> } />
          <Route path="/shorturls/:id" element={<ShortLinkPage />}/>
          <Route path="/" element={<HomePage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer authorized={true}/>
    </div>
  );
}
