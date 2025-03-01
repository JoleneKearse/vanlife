import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import vans from "../data/vans.js";

const VanPage = () => {
  const getBadgeColor = (category) => {
    switch (category) {
      case "Simple":
        return "bg-brand-500";
      case "Luxury":
        return "bg-neutral-500";
      case "Rugged":
        return "bg-accent-green";
      default:
        return "bg-brand-500";
    }
  };
  
  return (
    <main className="w-5/6 mx-auto md:w-1/2">
      <h1 className="text-4xl font-extrabold mb-8">Explore our van options</h1>
      <div className="flex justify-between items-center flex-wrap gap-4 mb-16 text-neutral-300">
        <div className="flex gap-6">
          <div className="bg-brand-200 text-neutral-300 font-medium text-center py-2 rounded-sm px-6 hover:bg-brand-400 hover:text-brand-200">Simple</div>
          <div className="bg-brand-200 text-neutral-300 font-medium text-center py-2 rounded-sm px-6 hover:bg-neutral-500 hover:text-brand-200">Luxury</div>
          <div className="bg-brand-200 text-neutral-300 font-medium text-center py-2 rounded-sm px-6 hover:bg-accent-green hover:text-brand-200">Rugged</div>
        </div>
        <p className="underline underline-offset-4 cursor-pointer">Clear filters</p>z
      </div>
      <section className="grid grid-cols-2 gap-4 items-center text-neutral-500 mb-20">
        {vans.map((van) => (
          <Link to={`${van.id}`} key={van.id} aria-label={`View details for ${van.name}, priced at ${van.price} per day.`} className="grid grid-rows-[auto_min-content_auto] gap-4 items-center">
            <img src={van.image} alt={van.alt} className="rounded-sm" />
            <div className="flex justify-between items-center flex-wrap text-lg font-semibold md:text-2xl">
              <p>{van.name}</p>
              <p>{van.price}</p>
            </div>
            <div className="flex justify-between items-start">
              <Badge badgeColor={getBadgeColor(van.category)}>{van.category}</Badge>
              <p className="font-medium text-sm">/day</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default VanPage;