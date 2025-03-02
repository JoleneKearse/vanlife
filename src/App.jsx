import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VanPage from "./pages/Vans/VanPage";
import VanDetailPage from "./pages/Vans/VanDetailPage";
import HostPage from "./pages/Host/HostPage";
import HostLayout from "./pages/Host/HostLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vans" element={<VanPage />} />
          <Route path="/vans/:id" element={<VanDetailPage />} />
          <Route element={<HostLayout />}>
            <Route path="/host" element={<HostPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
