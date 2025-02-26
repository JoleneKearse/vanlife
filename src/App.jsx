import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      {/* <Route path="/about" element={<AboutPage />}/> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App
