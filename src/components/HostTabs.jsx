import { NavLink } from "react-router-dom";

const HostTabs = () => {
  return (
    <nav className="mb-14">
      <ul className="flex gap-8 text-neutral-500 text-lg underline-offset-6">
        <li>
          <NavLink
            to="/host"
            end
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/income"
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/vans"
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/reviews"
            className={({ isActive }) =>
              isActive ? "underline text-neutral-500 font-bold" : null
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HostTabs;
