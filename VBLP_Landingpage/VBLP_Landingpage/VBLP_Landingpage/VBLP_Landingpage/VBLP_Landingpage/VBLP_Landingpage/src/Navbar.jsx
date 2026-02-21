import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Phone } from "lucide-react";
import logoWhite from "../public/vblplogo-white.png";
import logoColor from "../public/vblplogo.png";
import "./CSS/Navbar.css";
import { HashLink } from "react-router-hash-link";

const MOBILE_BREAKPOINT = 980;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showColoredLogo, setShowColoredLogo] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";
  // Check if we should use transparent header (only on home page and not scrolled)
  const useTransparentHeader = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowColoredLogo(scrollY > 100);
      
      // Only update active section if we're on home page
      if (isHomePage) {
        updateActiveSection();
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]); // Add isHomePage dependency

  const updateActiveSection = () => {
    const sections = ["hero", "about", "services", "projects", "benifits", "contact"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen) {
        closeMenu();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT && isOpen) {
        closeMenu();
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", to: "/#hero", id: "hero" },
    { name: "About Us", to: "/#about", id: "about" },
    { name: "Benifits", to: "/#benifits", id: "benifits" },
    { name: "Services", to: "/#services", id: "services" },
    { name: "Projects", to: "/#projects", id: "projects" },
    { name: "Contact Us", to: "/#contact", id: "contact" },
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
      
      <header className={`site-header ${isScrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""} ${!useTransparentHeader ? "solid-header" : ""}`}>
        <div className="nav-wrap" ref={navRef}>
          
          <div className="brand">
            {/* Always show colored logo on non-home pages or when scrolled */}
            {!useTransparentHeader ? (
              <img 
                src={logoColor} 
                alt="VBLP Logo" 
                className="brand-logo logo-visible"
              />
            ) : (
              <>
                {/* White Logo - only show on transparent header */}
                <img 
                  src={logoWhite} 
                  alt="VBLP Logo" 
                  className={`brand-logo logo-white ${showColoredLogo ? "logo-hidden" : "logo-visible"}`}
                />
                {/* Colored Logo */}
                <img 
                  src={logoColor} 
                  alt="VBLP Logo" 
                  className={`brand-logo logo-color ${showColoredLogo ? "logo-visible" : "logo-hidden"}`}
                />
              </>
            )}
          </div>

          <nav className="main-nav" ref={menuRef}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <HashLink 
                    smooth 
                    to={item.to}
                    onClick={closeMenu}
                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="cta-wrap">
            <HashLink smooth to="/#contact" onClick={closeMenu}>
              <button className="call-btn">
                <Phone size={16} />
                <span>Contact Us</span>
              </button>
            </HashLink>
          </div>

          <div className="hamburger">
            <Hamburger 
              toggled={isOpen} 
              toggle={toggleMenu}
              color={useTransparentHeader ? "#ffffff" : "#333333"}
              size={24}
              duration={0.3}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;