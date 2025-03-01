import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VanPage from "./pages/VanPage";
import VanDetailPage from "./pages/VanDetailPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/vans" element={<VanPage />}/>
      <Route path="/vans/:id" element={<VanDetailPage />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
