import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const authenticated = Boolean(localStorage.getItem("user"));
  const location = useLocation();

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/signin"
      state={{
        message: "You must login to access your van host information.",
        from: location,
      }}
      replace
    />
  );
};

export default AuthRequired;
