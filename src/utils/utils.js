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

export {getBadgeColor};