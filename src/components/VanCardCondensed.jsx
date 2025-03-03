import HostLinkTo from "./HostLinkTo";

const VanCardCondensed = ({ showLinks, name, img, price }) => {
  return (
    <article className="bg-neutral-100 rounded-sm p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={img} alt={name} className="w-16 h-16 rounded-sm" />
          <div>
            <p className="font-semibold text-3xl">{name}</p>
            <p className="font-medium text-base">{price}/day</p>
          </div>
        </div>
        {/* TODO: Adjust to include id */}
        {showLinks && <HostLinkTo to="/host/vans/:id">Edit</HostLinkTo>}
      </div>
    </article>
  );
}

export default VanCardCondensed;