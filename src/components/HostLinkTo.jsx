import { Link } from "react-router-dom";

const HostLinkTo = ({ to, fontStyle, children }) => {
  return (
    <Link to={to} className={fontStyle === "bold" ? "font-medium" : "underline"}>{children}</Link>
  );
}

export default HostLinkTo;