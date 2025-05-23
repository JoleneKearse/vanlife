import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <main className="h-full flex flex-col grow gap-8 py-40 w-5-6 md:w-1/2 mx-auto">
      <h1 className="text-3xl font-bold text-balance">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className="w-full">
        <Button
          btnColor="bg-neutral-600"
          btnColorHover="bg-brand-400"
          btnTextColor="text-neutral-100"
          btnWeight="font-bold"
          BtnWidth="w-full"
        >
          Return to home
        </Button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
