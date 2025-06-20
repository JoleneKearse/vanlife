import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <header>
      <nav className="bg-brand-100 text-neutral-300 py-14 flex justify-between px-1 md:px-10">
        <div>
          <NavLink
            to="/"
            className="font-black uppercase text-neutral-600 text-2xl"
          >
            #VanLife
          </NavLink>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            Host
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            Vans
          </NavLink>
          <NavLink to="/signin">
            <CgProfile />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
