import { useParams } from "react-router-dom";
import { vans } from "../data/vans";

const HostVanIdPhotos = () => {
  const { id } = useParams();
  const van = vans.find((v) => v.id === parseInt(id));
  if (!van) {
    return <p>Van not found</p>;
  }
  const { image, name } = van;

  return <img src={image} alt={name} className="w-24 rounded-sm" />;
};

export default HostVanIdPhotos;
