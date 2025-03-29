import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import GetStartedPage from "./Pages/GetStartedPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PersonalisedDiet from "./Pages/PersonalisedDiet";
import DietPage from "./Pages/DietPage";

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

// ✅ Separate layout component to control Navbar and Footer rendering
const MainLayout = () => {
  const location = useLocation();

  // List of routes that should NOT show Navbar & Footer
  const noNavFooterRoutes = ["/login", "/register", "/personalised-diet"];

  const showNavFooter = !noNavFooterRoutes.includes(location.pathname);
  const isHomePage = location.pathname === "/";

  return (
    <>
     
      
      <Routes>
        <Route path="/" element={<>
          <Navbar/>
          <HomePage />
          <DetailsPage />
          <GetStartedPage />
          <Footer/>
        </>} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personalised-diet" element={<PersonalisedDiet />} />
        <Route path="/diet" element={<DietPage />} />
      </Routes>


    </>
  );
};

export default App;
