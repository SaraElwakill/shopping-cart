import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import './index.css'

function App() {

  return (
    <div className="layout">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;


