const Button = ({
  btnColor,
  btnColorHover,
  btnTextColor = "text-brand-200",
  btnWeight,
  BtnWidth,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${btnColor} hover:${btnColorHover} ${btnTextColor} ${btnWeight} ${BtnWidth} rounded-md py-4 mt-3.5 w-full cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
