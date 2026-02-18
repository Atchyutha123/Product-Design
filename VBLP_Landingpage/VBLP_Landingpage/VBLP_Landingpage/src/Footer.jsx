import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../public/logo.png";
import "./CSS/Footer.css";
import india from "../public/india.jpeg";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  const handleLinkClick = () => {
    if (typeof document !== "undefined" && document.activeElement) {
      try {
        document.activeElement.blur();
      } catch (err) {}
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* ======================= COLUMN 1: COMPANY ======================= */}
        <div className="footer-col">
          <h4 className="footer-col-title">COMPANY</h4>
          <ul className="footer-list">
            <li>
              <HashLink smooth to="/#hero" onClick={handleLinkClick}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" onClick={handleLinkClick}>
                Why Choose Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" onClick={handleLinkClick}>
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={handleLinkClick}>
                Career
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={handleLinkClick}>
                Contact Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" onClick={handleLinkClick}>
                Company Profile
              </HashLink>
            </li>
          </ul>
        </div>

        {/* ======================= COLUMN 2: SERVICES ======================= */}
        <div className="footer-col">
          <h4 className="footer-col-title">SERVICES</h4>
          <ul className="footer-list">
            <li>
              <HashLink smooth to="/#services" onClick={handleLinkClick}>
                Logo Design
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={handleLinkClick}>
                Brochure Design
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={handleLinkClick}>
                Website Branding
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={handleLinkClick}>
                Motion Design
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={handleLinkClick}>
                Digital Strategy
              </HashLink>
            </li>
          </ul>
        </div>

        {/* ======================= COLUMN 3: NEED HELP ======================= */}
        <div className="footer-col">
          <h4 className="footer-col-title">NEED HELP?</h4>
          <div className="footer-contact-info">
            <p className="contact-label" style={{ margin: "0px" }}>
              CALL US DIRECTLY(INDIA)
            </p>
            <a
              href="tel:+918309390566"
              className="contact-link"
              style={{ padding: "5px 5px" }}
            >
              +91 8309390566
            </a>

            <p className="contact-label" style={{ margin: "0px" }}>
              MAIL US DIRECTLY
            </p>
            <a
              href="mailto:info@vblptechsolutions.com"
              className="contact-link"
              style={{ padding: "5px 5px" }}
            >
              info@vblptechsolutions.com
            </a>

            <p className="contact-label social-label" style={{ margin: "0px" }}>
              FOLLOW US ON
            </p>
            <div className="footer-social-icons" style={{ margin: "0px" }}>
              <a href="#" aria-label="facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="twitter">
                <X size={18} />
              </a>
              <a href="#" aria-label="instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="linkedin">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ======================= COLUMN 4: REACH US ======================= */}
        <div className="footer-col">
          <h4 className="footer-col-title">REACH US</h4>
          <div className="footer-reach-info">
            <div className="reach-location">
              <p className="location-flag">
                <img src={india} alt="" width={"20px"} srcset="" /> India
              </p>
              <p className="location-company">VBLP Tech Solutions Pvt Ltd.,</p>
              <address className="location-address">
                 KPHB, Hitech City Road, Hyderabad, Telangana. 
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= BOTTOM BAR ======================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>
            © {new Date().getFullYear()} VBLP Tech Solutions. All Rights
            Reserved.
          </p>
        </div>

        <div className="footer-bottom-right">
          <HashLink smooth to="/terms" onClick={handleLinkClick}>
            Terms and conditions
          </HashLink>
          <HashLink smooth to="/privacy-policy" onClick={handleLinkClick}>
            Privacy Policy
          </HashLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;