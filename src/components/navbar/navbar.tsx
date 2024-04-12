import { navLinks } from "../../lib/constants";
import { appleImg } from "../../lib/media";

const NavBar = () => {
  return (
    <header className="w-full p-3 mx-auto sticky top-0 z-50 backdrop-blur-md backdrop-brightness-75 border-b-[1px] border-[#3D3D3D]">
      <nav className="screen-width flex justify-between lg:justify-around items-center">
        <div className="flex flex-row gap-2">
          <img
            src={appleImg}
            alt="Apple logo"
            width={12}
            height={12}
          />
          <span className="font-semibold hidden sm:block">iPhone 15 Pro</span>
        </div>
        <ol className="flex gap-12 text-gray">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-white transition-all text-sm">
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
