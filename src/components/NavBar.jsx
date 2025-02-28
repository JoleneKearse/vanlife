import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-brand-100 text-neutral-300 py-14 flex justify-between px-10">
      <div>
        <Link to="/" className="font-black uppercase text-neutral-600 text-2xl">#VanLife</Link>
      </div>
      <div className="flex gap-4">
        <Link to="about" className="font-semibold">About</Link>
        <Link to="vans" className="font-semibold">Vans</Link>
      </div>
    </nav>
  );
}

export default NavBar;