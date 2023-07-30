import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./util/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PopularArticles from "./pages/PopularArticles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/popular-articles" element={<PopularArticles />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      {location.pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
