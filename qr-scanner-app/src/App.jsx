import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import WorkDetail from "../Components/WorkDetail";
import CTA from "../Components/CTA";
import Scanner from "../Components/Scanner";
import History from "../Components/History";
import Footer from "../Components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features/>
      <WorkDetail />
      <CTA />
      <Footer /> 
      {/* <Scanner />
      <History /> */}
    </div>
  );
}

export default App;
