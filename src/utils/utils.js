import { users } from "../data/vans.js";

const getBadgeColor = (category) => {
  switch (category) {
    case "Simple":
      return "bg-brand-400";
    case "Luxury":
      return "bg-neutral-500";
    case "Rugged":
      return "bg-accent-green";
    default:
      return "bg-brand-400";
  }
};

const loginUser = async (creds) => {
  const foundUser = users.find(
    (user) => user.email === creds.email && user.password === creds.password
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (foundUser) {
        resolve({
          user: {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            password: foundUser.password,
          },
          token: "fake-jwt-token",
        });
      } else {
        reject(new Error("Wrong credentials. Please try again."));
      }
    }, 300);
  });
};

export { getBadgeColor, loginUser };
