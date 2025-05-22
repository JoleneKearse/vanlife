import { Link } from "react-router-dom";
import Button from "./Button";

const Cta = () => {
  return (
    <article className="bg-brand-300 p-8 rounded-sm mt-4 mb-16">
      <p className="text-2xl font-bold w-1/2">Your destination is waiting.</p>
      <p className="text-2xl font-bold w-1/2">Your van is ready.</p>
      <Link to="/vans">
        <Button
          btnColor="bg-neutral-500"
          btnColorHover="bg-brand-400"
          btnTextColor="text-neutral-100"
          btnWeight="font-bold"
          BtnWidth="w-2/5"
        >
          Explore our vans
        </Button>
      </Link>
    </article>
  );
};

export default Cta;
