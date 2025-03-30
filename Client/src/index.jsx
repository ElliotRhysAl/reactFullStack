/*Libraries & Frameworks*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

/*Pages & Components*/
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <BrowserRouter>
            <Navigation />
            <div className="p-4">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </>
);