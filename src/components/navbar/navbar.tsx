import { navLinks } from "../../lib/constants";
import { appleImg } from "../../lib/utils";

const NavBar = () => {
  return (
    <header className="w-full max-w-[1920px] flex-center p-5 mx-auto">
      <nav className="flex flex-row w-full">
        <img src={appleImg} alt="Apple logo" width={20} height={20} />
        <ol className="flex justify-end items-center w-full gap-6 text-gray sm:justify-center">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-white transition-all">
              <a href={link.link} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default NavBar;
