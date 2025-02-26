const Footer = () => {
  return ( 
    <footer className="flex justify-center items-center bg-brand-100 text-neutral-200 py-4 bg-neutral-400 py-10">
      <p className="uppercase">&copy; {new Date().getFullYear()} #VanLife</p>
    </footer>
   );
}
 
export default Footer;