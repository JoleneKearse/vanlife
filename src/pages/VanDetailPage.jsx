import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import vans from "../data/vans.js";

const VanDetailPage = () => {
  const params = useParams();
  const vanId = params.id - 1;  // van ids are 1-indexed
  const van = vans.find((van) => van.id === vanId);

  return (
    <main className="w-5/6 mx-auto md:w-1/2">
      <div className="flex items-center gap-2">
        <img src="/arrow.svg" alt="back arrow" />
        <Link to="/vans" className="text-brand-500">Back to all vans</Link>
      </div>
      <img src={van.image} alt={van.alt} className="mt-4 mb-8" />

    </main>
  );
}

export default VanDetailPage;