import { useState } from "react";
import Button from "../components/Button.jsx";

const SignInPage = () => {
  const [signinForm, setSigninForm] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signinForm);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex flex-col text-center gap-8 w-5-6 md:w-1/2 mx-auto font-bold">
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
