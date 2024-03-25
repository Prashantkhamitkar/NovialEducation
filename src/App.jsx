import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import JoinCourses from "./components/JoinCourses";
import BasicMap from "./components/BasicMap";

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
      <JoinCourses />
      <BasicMap/>
      <Footer />
    </>
  );
}

export default App;
