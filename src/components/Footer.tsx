import Link from "next/link";
import TheCutFlooringLogo from "../assets/images/the-cut-flooring-logo.png";

const Footer = () => {
  return (
    <footer className="section footer-section">
      <div className="container">
        <div className="footer-logo">
          <Link className="footer-link" href="/">
            <div className="wrapper-logo">
              <img
                className="the-cut-logo"
                src={TheCutFlooringLogo.src}
                alt="The cut flooring Logo"
              />
            </div>
            <p className="the-cut-title">The Cut Flooring</p>
          </Link>
        </div>
        <div className="wrapper-footer-menu">
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <Link className="footer-menu-link" href="/">
                Home
              </Link>
            </li>
            <li className="footer-menu-item">
              <Link className="footer-menu-link" href="/services">
                Services
              </Link>
            </li>
            <li className="footer-menu-item">
              <Link className="footer-menu-link" href="/about">
                About
              </Link>
            </li>
            <li className="footer-menu-item">
              <Link className="footer-menu-link" href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="footer-menu-item">
              <Link className="footer-menu-link" href="/location">
                Location
              </Link>
            </li>
            <li className="footer-menu-item">
              <Link className="footer-menu-link" href="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="footer-instagram">
            <div className="wrapper-instagram">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="divider-line" />
        <ul className="row">
          <li className="col-3 col-small-6">
            <div className="footer-item footer-address">
              <h3 className="footer-title">Address</h3>
              <p className="footer-sub-title">
                1196 Kennedy Rd, Scarborough <br /> Toronto , Ontario, ON M1P
                2L1, Canada,
              </p>
              <p className="footer-contact">
                <Link href="">6472963377</Link>
              </p>
              <p className="footer-contact">
                <Link href="">Thecutflooring@gmail.com</Link>
              </p>
            </div>
          </li>
          <li className="col-3 col-small-6">
            <div className="footer-item footer-about">
              <h3 className="footer-title">About us</h3>
              <p className="footer-sub-title">
                We are grateful for your support, if you have any additional
                questions feel free to call us at anytime from 12PM - 12AM.
              </p>
            </div>
          </li>
        </ul>
        <div className="divider-line" />
        <p className="copy-right">© 2024 The Cut</p>
      </div>
    </footer>
  );
};
export default Footer;
