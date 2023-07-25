import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Nav } from "../components/layout/Nav";
import { PrivacyPolicy } from "../components/pages/PrivacyPolicy";
import { Footer } from "../components/layout/Footer";
import { Home } from "../components/pages/Home";
import { HelmetProvider } from "react-helmet-async";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </HelmetProvider>
    </BrowserRouter>
  );
};
