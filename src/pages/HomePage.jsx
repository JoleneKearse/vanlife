import { Link } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <main className="bg-[url(/hero.webp)] w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white gap-8 text-balance text-prose -mb-40">
      <div className="flex flex-col gap-10 mx-10">
        <h1 className="text-4xl font-extrabold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="w-full">
          <Button
            btnColor="bg-brand-500"
            btnColorHover="bg-brand-400"
            btnTextColor="text-neutral-100"
            btnWeight="font-bold"
            btnWidth="w-full"
          >
            Find your van
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
