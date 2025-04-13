import { useParams } from "react-router-dom";
import { vans } from "../data/vans";

const HostVanIdPricing = () => {
  const { id } = useParams();
  const van = vans.find((v) => v.id === parseInt(id));
  if (!van) {
    return <p>Van not found</p>;
  }
  const { price } = van;
  
  return (
    <p>
      <span className="font-bold">${price}</span>/day
    </p>
  );
};

export default HostVanIdPricing;
