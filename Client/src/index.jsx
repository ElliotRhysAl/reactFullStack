/*Libraries & Frameworks*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

/*Pages & Components*/
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";
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
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/* Fallback route for 404 Not Found */}
                <Route path="/404" element={<h1>Page Not Found</h1>} />
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </>
);