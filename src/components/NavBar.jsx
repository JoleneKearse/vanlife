import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="bg-brand-100 text-neutral-300 py-14 flex justify-between px-10">
        <div>
          <Link to="/" className="font-black uppercase text-neutral-600 text-2xl">#VanLife</Link>
        </div>
        <div className="flex gap-4 font-semibold">
          <Link to="/host">Host</Link>
          <Link to="about">About</Link>
          <Link to="vans">Vans</Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;