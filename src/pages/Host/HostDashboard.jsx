import HostReview from "../../components/HostReview";
import HostWelcome from "../../components/HostWelcome";
import HostVanList from "../../components/HostVanList";

const HostDashboard = () => {
  return (
    <div className="">
      <HostWelcome />
      <HostReview />
      <HostVanList showLinks={true} />
    </div>
  );
}

export default HostDashboard;