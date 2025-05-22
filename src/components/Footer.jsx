const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-neutral-200 py-10 bg-neutral-400 absolute bottom-0 w-full">
      <p className="uppercase">&copy; {new Date().getFullYear()} #VanLife</p>
    </footer>
  );
};

export default Footer;
