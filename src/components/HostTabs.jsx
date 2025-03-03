import { Link } from "react-router-dom";

const HostTabs = () => {
  return (
    <nav className="mb-14">
      <ul className="flex gap-8 text-neutral-500 text-lg underline-offset-6">
        <li><Link to="/host">Dashboard</Link></li>
        <li><Link to="/host/income">Income</Link></li>
        <li><Link to="/host/vans">Vans</Link></li>
        <li><Link to="/host/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
}

export default HostTabs;