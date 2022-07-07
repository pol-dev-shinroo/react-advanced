import React from "react";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import People from "./Pages/People";
import Error from "./Pages/Error";
import Person from "./Pages/Person";
// navbar
import Navbar from "./Pages/Navbar";
const RouterSetup = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterSetup;
