const Badge = ({ badgeColor, children }) => {
  return (
    <div className={`text-brand-200 text-center px-4 py-2 w-max rounded-sm ${badgeColor}`}>{children}</div>
  );
}

export default Badge;