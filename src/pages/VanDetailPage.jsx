import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import vans from "../data/vans.js";
import { getBadgeColor } from "../utils/utils.js";

const VanDetailPage = () => {
  const params = useParams();
  const vanId = +params.id;
  const van = vans.find((van) => van.id === vanId);

  return (
    <main className="w-5/6 mx-auto md:w-1/2">
      <div className="flex items-center gap-2">
        <img src="/arrow.svg" alt="back arrow" />
        <Link to="/vans" className="text-brand-500">Back to all vans</Link>
      </div>
      <img src={van.image} alt={van.alt} className="mt-8 mb-16 rounded-sm" />
      <div className="flex flex-col gap-4 font-medium mb-24">
        <Badge badgeColor={getBadgeColor(van.category)}>{van.category}</Badge>
        <h1 className="text-3xl font-bold">{van.name}</h1>
        <p className="text-xl"><span className="font-bold text-2xl">{van.price}</span>/day</p>
        <p>{van.description}</p>
        <Button btnColor="bg-brand-500" btnTextColor="text-neutral-100" btnWeight="font-bold" btnWidth="w-full">Rent this van</Button>
      </div>
    </main>
  );
}

export default VanDetailPage;