
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Training_Features from "./components/Training_Features";

function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
