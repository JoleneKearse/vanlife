const Button = ({ btnColor, btnTextColor = "text-brand-200", btnWeight, BtnWidth, children, onClick }) => {
  return (
    <button className={`${btnColor} ${btnTextColor} ${btnWeight} ${BtnWidth} rounded-md py-4 mt-3.5`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;