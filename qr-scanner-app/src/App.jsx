import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import WorkDetail from "../Components/WorkDetail";
import CTA from "../Components/CTA";
import Scanner from "../Components/Scanner";
import History from "../Components/History";
import Footer from "../Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/scanner" element={<Scanner />}/>
        <Route path="/history" element={<History />}/>

      </Routes>
      </BrowserRouter>
      {/* <Scanner />
      <History /> */}
    </div>
  );
}

export default App;
