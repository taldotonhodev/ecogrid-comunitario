import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProblemPage from "../pages/ProblemPage";
import SolutionPage from "../pages/SolutionPage";
import HowItWorksPage from "../pages/HowItWorksPage";
import ImpactPage from "../pages/ImpactPage";
import SupportPage from "../pages/SupportPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/problem" element={<ProblemPage />} />
      <Route path="/solution" element={<SolutionPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  );
}

export default AppRouter;
