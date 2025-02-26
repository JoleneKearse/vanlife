const Button = ({ btnColor, btnWeight, BtnWidth, children, onClick }) => {
  return (
    <button className={`${btnColor} ${btnWeight} ${BtnWidth} rounded-md py-4 mt-3.5`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;