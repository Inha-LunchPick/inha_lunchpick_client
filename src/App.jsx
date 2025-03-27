import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuSetupPage from "./pages/MenuSetupPage";
import RestaurantSetupPage from "./pages/RestaurantSetupPage";
import RecommendSetupPage from "./pages/RecommendSetupPage";
import BotSetupPage from "./pages/BotSetupPage";
import SettingsPage from "./pages/SettingsPage.jsx";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 bg-gray-50 overflow-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuSetupPage />} />
              <Route path="/restaurant" element={<RestaurantSetupPage />} />
              <Route path="/recommend" element={<RecommendSetupPage />} />
              <Route path="/bot" element={<BotSetupPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
