import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import JoinCourses from "./components/JoinCourses";

import ContactUs from "./components/ContactUs";
import Courses from "./components/Courses";
import CorporateTraining from "./components/CorporateTraining";
import Trainers from "./components/Trainers";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/corporate_training" element={<CorporateTraining />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
      </Routes>

      <JoinCourses />
      <Footer />
    </>
  );
}

export default App;
