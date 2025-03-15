import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PropertyDetail from "./components/PropertyDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
