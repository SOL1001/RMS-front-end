import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PropertyDetail from "./components/PropertyDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login"; // Import your Login component
import Profile from "./pages/Profile"; // Import your Profile component
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} /> {/* Login Page */}
      <Route path="/signup" element={<SignUp />} />
      {/* Routes with Navigation */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> {/* Home Page */}
        <Route path="/property/:id" element={<PropertyDetail />} />{" "}
        {/* Property Detail */}
        <Route path="/about" element={<About />} /> {/* About Page */}
        <Route path="/contact" element={<ContactUs />} /> {/* Contact Page */}
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
        </Route>
      </Route>
      {/* 404 Not Found Route */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
