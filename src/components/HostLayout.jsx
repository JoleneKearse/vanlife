import { Outlet } from "react-router-dom";
import HostTabs from "./HostTabs";

const HostLayout = () => {
  return (
    <section className="w-5-6 md:w-1/2 mx-auto">
      <HostTabs />
      <main className="bg-brand-100">
        <Outlet />
      </main>
    </section>
  );
};

export default HostLayout;
