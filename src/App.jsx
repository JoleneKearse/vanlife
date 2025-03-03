import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VanPage from "./pages/Vans/VanPage";
import VanDetailPage from "./pages/Vans/VanDetailPage";
import HostLayout from "./pages/Host/HostLayout";
import HostDashboard from "./pages/Host/HostDashboard";
import HostVansPage from "./pages/Host/HostVansPage";

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
            <Route path="/host" element={<HostDashboard />} />
            <Route path="/host/vans" element={<HostVansPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
