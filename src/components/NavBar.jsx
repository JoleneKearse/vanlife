import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-brand-100 text-neutral-300 py-14 flex justify-between px-10">
      <div>
        <h3 className="font-black uppercase text-neutral-600 text-2xl">#VanLife</h3>
      </div>
      <div className="flex gap-4">
        <Link to="About" className="font-semibold">About</Link>
        <Link to="Vans" className="font-semibold">Van</Link>
      </div>
    </nav>
  );
}

export default NavBar;