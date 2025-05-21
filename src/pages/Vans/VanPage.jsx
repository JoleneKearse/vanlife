import { Link, useSearchParams } from "react-router-dom";
import Badge from "../../components/Badge";
import { vans } from "../../data/vans.js";
import { getBadgeColor } from "../../utils/utils";

const VanPage = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("category");
  const displayedVans = typeFilter
    ? vans.filter((van) => van.category.toLowerCase() === typeFilter)
    : vans;

  return (
    <main className="w-5/6 mx-auto md:w-1/2">
      <h1 className="text-4xl font-extrabold mb-8">Explore our van options</h1>
      <nav className="flex justify-between items-center flex-wrap gap-4 mb-16 text-neutral-300">
        <ul className="flex gap-6 items-center flex-wrap w-full">
          <li
            className={`text-neutral-300 font-medium text-center py-2 rounded-sm px-6 hover:bg-brand-400 hover:text-brand-200 ${
              typeFilter === "simple" ? "bg-brand-400" : "bg-brand-200"
            }`}
          >
            <Link to="?category=simple">Simple</Link>
          </li>
          <li
            className={`font-medium text-center py-2 rounded-sm px-6 hover:bg-neutral-500 hover:text-brand-200 ${
              typeFilter === "luxury"
                ? "bg-neutral-500 text-brand-200"
                : "bg-brand-200 text-neutral-300"
            }`}
          >
            <Link to="?category=luxury">Luxury</Link>
          </li>
          <li
            className={`font-medium text-center py-2 rounded-sm px-6 hover:bg-accent-green hover:text-brand-200 ${
              typeFilter === "rugged" ? "bg-accent-green text-brand-200" : "bg-brand-200 text-neutral-300"
            }`}
          >
            <Link to="?category=rugged">Rugged</Link>
          </li>
          {typeFilter && (
            <li className="ml-auto underline underline-offset-4 cursor-pointer">
              <Link to="">Clear filters</Link>
            </li>
          )}
        </ul>
      </nav>
      <section className="grid grid-cols-2 gap-4 items-center text-neutral-500 mb-20">
        {displayedVans.map((van) => (
          <Link
            to={`${van.id}`}
            key={van.id}
            aria-label={`View details for ${van.name}, priced at ${van.price} per day.`}
            className="grid grid-rows-[auto_min-content_auto] gap-4 items-center"
          >
            <img src={van.image} alt={van.alt} className="rounded-sm" />
            <div className="flex justify-between items-center flex-wrap text-lg font-semibold md:text-2xl">
              <p>{van.name}</p>
              <p>{van.price}</p>
            </div>
            <div className="flex justify-between items-start">
              <Badge badgeColor={getBadgeColor(van.category)}>
                {van.category}
              </Badge>
              <p className="font-medium text-sm">/day</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default VanPage;
