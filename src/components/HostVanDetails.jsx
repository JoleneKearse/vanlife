import { useParams } from "react-router-dom";
import { vans } from "../data/vans";

const HostVanDetails = () => {
    const { id } = useParams();
    const van = vans.find((v) => v.id === parseInt(id));
    if (!van) {
        return <p>Van not found</p>;
    }
    const { name, category, description, visibility } = van;
    return ( 
        <article className="flex flex-col gap-4">
            <p><span className="font-bold">Name: </span>{name}</p>
            <p><span className="font-bold">Category: </span>{category}</p>
            <p><span className="font-bold">Description: </span>{description}</p>
            <p><span className="font-bold">Visibility: </span>{visibility}</p>
        </article>
     );
}
 
export default HostVanDetails;