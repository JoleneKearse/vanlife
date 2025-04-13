import { NavLink } from "react-router-dom";

const Tab = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        isActive ? "underline text-neutral-500 font-bold" : null
      }
    >
      {children}
    </NavLink>
  );
};

export default Tab;
