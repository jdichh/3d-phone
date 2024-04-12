import { navLinks } from "@/lib/constants";
import { appleImg } from "@/lib/media";
import './navbar.css'

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img
            src={appleImg}
            alt="Apple logo"
            width={12}
            height={12}
          />
          <span className="logo-span">iPhone 15 Pro</span>
        </div>
        <ol className="list-container">
          {navLinks.map((link, index) => (
            <li key={index} className="list-items">
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
