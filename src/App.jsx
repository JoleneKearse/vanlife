import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VanPage from "./pages/Vans/VanPage";
import VanDetailPage from "./pages/Vans/VanDetailPage";
import SignInPage from "./pages/SignInPage.jsx";
import HostLayout from "./components/HostLayout";
import HostDashboard from "./pages/Host/HostDashboard";
import HostVansPage from "./pages/Host/HostVansPage";
import HostIncomePage from "./pages/Host/HostIncomePage";
import HostVanDetailLayout from "./components/HostVanDetailLayout.jsx";
import HostVanIdPage from "./pages/Host/HostVanIdPage";
import HostVanIdPricing from "./components/HostVanIdPricing.jsx";
import HostReviewsPage from "./pages/Host/HostReviewsPage";
import HostVanIdPhotos from "./components/HostVanIdPhotos.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<VanPage />} />
          <Route path="vans/:id" element={<VanDetailPage />} />
          <Route path="signin" element={<SignInPage />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncomePage />} />
            <Route path="reviews" element={<HostReviewsPage />} />
            <Route path="vans" element={<HostVansPage />} />

            <Route path="vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<HostVanIdPage />} />
              <Route path="pricing" element={<HostVanIdPricing />} />
              <Route path="photos" element={<HostVanIdPhotos />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
