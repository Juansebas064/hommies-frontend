import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavigationBar/Navbar.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home/Home.jsx";
import Calendar from "./components/Calendar.jsx";
import LoginUser from "./components/Login.jsx"
import Contact from "./components/Contact.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ProfileConfig from "./components/Profile/ProfileConfig.jsx";
import ProfilePreferences from "./components/Profile/ProfilePreferences.jsx";

import './Map.css';


function App() {



  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/config" element={<ProfileConfig />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile/preferences" element={< ProfilePreferences/>}/>
          <Route element={<ProtectedRoute />}>

          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
