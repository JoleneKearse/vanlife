import Tab from "./Tab";

const HostTabs = () => {
  return (
    <nav className="mb-14">
      <ul className="flex gap-8 text-neutral-500 text-lg underline-offset-6">
        <li>
          <Tab to="/host">Dashboard</Tab>
        </li>
        <li>
          <Tab to="/host/income">Income</Tab>
        </li>
        <li>
          <Tab to="/host/vans">Vans</Tab>
        </li>
        <li>
          <Tab to="/host/reviews">Reviews</Tab>
        </li>
      </ul>
    </nav>
  );
};

export default HostTabs;
