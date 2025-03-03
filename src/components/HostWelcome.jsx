import { Link } from "react-router-dom";

const HostWelcome = () => {
  return (
    <div className="bg-brand-200 font-medium px-6 py-10 flex flex-col gap-4 text-neutral-500">
      <h1 className="font-bold text-6xl">Welcome!</h1>
      <div className="flex justify-between text-neutral-400">
        <p>Income last <span className="underline font-medium">30 days</span></p>
        <Link to="/income">Details</Link>
      </div>
      <p className="font-extrabold text-7xl" id="host-income-amt">$2,260</p>
    </div>
  );
}

export default HostWelcome;