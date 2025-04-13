import { useParams } from "react-router-dom";
import HostLinkTo from "../../components/HostLinkTo";
import { vans } from "../../data/vans";
import Tab from "../../components/Tab";

const HostVanDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const van = vans.find((v) => v.id === parseInt(id));
  if (!van) {
    return <p>Van not found</p>;
  }
  const { image, name, price } = van;

  return (
    <>
      <HostLinkTo to={`host/vans`} fontStyle="">
        <img src="/arrow.svg" alt="" className="inline-flex mr-4" />
        Back to all vans
      </HostLinkTo>
      <section className="flex gap-4 items-center my-8">
        <img src={image} alt="Van" className="w-1/2 h-auto rounded-sm" />
        <div>
          <p className="text-3xl font-bold">{name}</p>
          <p className="text-xl font-semibold">${price}/day</p>
        </div>
      </section>
      <nav className="mb-8">
        <ul className="flex gap-8 text-neutral-500 text-md underline-offset-6">
          <li>
            <Tab to="/host/vans/:id">
              Details
            </Tab>
          </li>
          <li>
            <Tab to="/host/vans/:id/pricing">
              Pricing
            </Tab>
          </li>
          <li>
            <Tab to="/host/vans/:id/photos">
              Photos
            </Tab>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HostVanDetailPage;
