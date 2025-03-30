import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VanPage from "./pages/Vans/VanPage";
import VanDetailPage from "./pages/Vans/VanDetailPage";
import HostLayout from "./components/HostLayout";
import HostDashboard from "./pages/Host/HostDashboard";
import HostVansPage from "./pages/Host/HostVansPage";
import HostVanDetailPage from "./pages/Host/HostVanDetailPage";
import HostIncomePage from "./pages/Host/HostIncomePage";
import HostReviewsPage from "./pages/Host/HostReviewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<VanPage />} />
          <Route path="vans/:id" element={<VanDetailPage />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncomePage />} />
            <Route path="vans" element={<HostVansPage />} />
            <Route path="vans/:id" element={<HostVanDetailPage />} />
            <Route path="reviews" element={<HostReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
