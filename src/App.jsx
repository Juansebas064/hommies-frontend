import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavigationBar/Navbar.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Calendar from "./components/Calendar.jsx";
import LoginUser from "./components/Login.jsx"
import Contact from "./components/Contact.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import { Dashboard } from "./components/Dashboard.jsx";


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
          <Route element={<ProtectedRoute />}>
            <Route path="/calendar" element={<Calendar />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
