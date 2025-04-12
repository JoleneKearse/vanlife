import { Link } from "react-router-dom";
import { hostVans } from "../data/vans";
import VanCardCondensed from "./VanCardCondensed";
import HostLinkTo from "./HostLinkTo";

const HostVanList = ({ showLinks }) => {
  return (
    <article className="bg-brand-100 px-6 py-8">
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-4xl">Your listed vans</p>
        {showLinks && <HostLinkTo to="/host/vans">View all</HostLinkTo>}
      </div>
      {hostVans.map((van) => (
        <Link to={`/host/vans/${van.id}`} key={van.id}>
          <VanCardCondensed
            key={van.id}
            showLinks={showLinks}
            name={van.name}
            img={van.image}
            price={van.price}
          />
        </Link>
      ))}
    </article>
  );
};

export default HostVanList;
