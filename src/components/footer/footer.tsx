import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="screen-width">
        <div className="footer-inner-div">
          <p className="footer-text">
            Liked my work?{" "}
            <a
              href="https://jdichh.vercel.app"
              className="footer-link"
              target="_blank"
            >
              Check out my portfolio
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/jason-dichoso/"
              className="footer-link"
              target="_blank"
            >
              my LinkedIn
            </a>{" "}
            to connect with me.
          </p>
          <p className="footer-text">
            <span className="uppercase"> This is only a side project!</span>{" "}
            Don't come for me, Apple.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
