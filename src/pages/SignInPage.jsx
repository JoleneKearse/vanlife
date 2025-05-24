import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import { loginUser } from "../utils/utils.js";

const SignInPage = () => {
  const [signinForm, setSigninForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(signinForm);
      localStorage.setItem("user", JSON.stringify(userData.user));
      localStorage.setItem("token", userData.token);
      setError(null);
      const redirectTo = location.state?.from?.pathname || "/host";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex flex-col text-center gap-8 w-5-6 md:w-1/2 mx-auto font-bold">
      {location.state?.message && (
        <p className="text-red-500">{location.state.message}</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-neutral-500 font-bold text-3xl">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label htmlFor="email" className="text-left">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email address"
          value={signinForm.email}
          className="font-medium bg-neutral-100 p-4 rounded-sm mb-4 border-2 border-neutral-200 focus:border-brand-500 focus:outline-none"
        />
        <label htmlFor="password" className="text-left">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
          value={signinForm.password}
          className="font-medium bg-neutral-100 p-4 rounded-sm mb-4 border-2 border-neutral-200 focus:border-brand-500 focus:outline-none"
        />
        <Button
          btnColor="bg-brand-500"
          btnColorHover="bg-brand-400"
          btnTextColor="text-neutral-100"
          btnWeight="font-bold"
          btnWidth="w-full"
        >
          Sign in
        </Button>
      </form>
      <p className="text-neutral-500">
        Don't have an account?{" "}
        <a href="#" className="text-brand-500 hover:text-brand-400">
          Create one now
        </a>
      </p>
    </main>
  );
};

export default SignInPage;
