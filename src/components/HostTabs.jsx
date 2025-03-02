const HostTabs = () => {
  return (
    <nav className="mb-14">
      <ul className="flex gap-4 text-neutral-500 text-lg underline underline-offset-6">
        <li><a href="/host">Dashboard</a></li>
        <li><a href="/income">Income</a></li>
        <li><a href="/vans">Vans</a></li>
        <li><a href="/reviews">Reviews</a></li>
      </ul>
    </nav>
  );
}

export default HostTabs;