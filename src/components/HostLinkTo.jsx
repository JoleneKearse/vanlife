import { Link } from "react-router-dom";

const HostLinkTo = ({ to, children }) => {
  return (
    <Link to={to} className="font-medium">{children}</Link>
  );
}

export default HostLinkTo;