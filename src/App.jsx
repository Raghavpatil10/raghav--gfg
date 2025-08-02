import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedAuthors from "./components/FeaturedAuthors";
import './App.css';

function App() {
  return (
    <div className="font-sans text-black bg-white">
      <Navbar />
      <Hero />
      <FeaturedAuthors />
    </div>
  );
}

export default App;
