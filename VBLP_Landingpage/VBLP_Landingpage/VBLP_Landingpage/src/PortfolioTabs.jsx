import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import "./PortfolioTabs.css";
import kissanmart from "../public/kissanmart.jpg";
import DLF from "../public/DLF.jpg";
import Kanchira from "../public/Kanchira.jpg";
import SRK from "../public/SRK.png";
import RVInterior from "../public/RVInterior.png";
import Bawarchi from "../public/Bawarchi.png";
import "./DigitalMarketingSection.css";

import { Link } from "react-router-dom";
import digi from "../public/digi-logo-W1Qg_PRI.png";
import designer from "../public/designer.png";
import printing from "../public/printing-CJrkfNPE.png";
import { HashLink } from "react-router-hash-link";

// DUMMY/PLACEHOLDER COMPONENTS
const NavWithScrollUnderline = () => (
  <div style={{ height: 50, border: "1px solid #ccc", textAlign: "center" }}>
    NavWithScrollUnderline Placeholder
  </div>
);
const Component3 = () => (
  <div style={{ height: 100, border: "1px solid #ccc", textAlign: "center" }}>
    Component3 Placeholder
  </div>
);
const Component2 = () => (
  <div style={{ height: 100, border: "1px solid #ccc", textAlign: "center" }}>
    Component2 Placeholder
  </div>
);
const Component1 = () => (
  <div style={{ height: 100, border: "1px solid #ccc", textAlign: "center" }}>
    Component1 Placeholder
  </div>
);

// -----------------------------------------------------------
// FRAMER MOTION VARIANTS
// -----------------------------------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between children starting animation
      delayChildren: 0.2, // Initial delay for children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// -----------------------------------------------------------
// EXISTING DIGITAL MARKETING COMPONENT (UNCHANGED)
// -----------------------------------------------------------
const DigitalMarketingSection = () => {
  
  return (
    <section className="dm-wrapper">
      
      {/* LEFT IMAGE */}
      <div className="dm-left">
        <img src={designer} alt="Designer" />
      </div>

      {/* RIGHT SIDE */}
      <div className="dm-right">
        {/* TOP ROW */}
        <div className="dm-top-row">
          <div className="dm-logo-card">
            <img src={digi} alt="DIGI Prints" className="dm-logo-img" />
            <button className="dm-buy-btn">Buy Prints</button>
          </div>

          <img src={printing} alt="Printing" className="dm-small-img" />
        </div>

        {/* BOTTOM INFO CARD */}
        <div className="dm-info-card">
          <h2>DIGI Prints</h2>
          <p>
            DIGI Prints & Web is a creative and digital service provider that
            specializes in print solutions, web design, and brand development.
            We help location-based brands grow and thrive through impactful
            design and innovation.
          </p>

          <HashLink smooth to="#contact"  className="strategy-btn">
            <span className="strategy-btn__arrow">➜</span>
            <span className="strategy-btn__label">Connect With Us</span>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------
// MAIN COMPONENT (ADDED MOTION)
// -----------------------------------------------------------
const PortfolioTabs = () => {
  const categories = [
    "Designing",
    "Development",
    "Graphic Design",
    "Digital Marketing",
  ];

  // CARD DATA FOR FIRST 3 TABS ONLY (UNCHANGED)
  const data = {
    Designing: [
      {
        title: "Kissan Mart",
        tag: "Product UI",
        desc: "An online platform concept for farmers to explore and purchase quality fertilizers, seeds, and crop nutrients.",
        img: kissanmart,
      },
      {
        title: "DFS Dashboard",
        tag: "Fintech UX",
        desc: "A visual-heavy analytics dashboard crafted for financial teams to track approvals and loan workflows.",
        img: DLF,
      },
      {
        title: "Kanchira Store",
        tag: "E-Commerce",
        desc: "A fashion storefront design focusing on bold visuals, smooth navigation, and conversions.",
        img: Kanchira,
      },
    ],

    Development: [
      {
        title: "Kanchira",
        tag: "E-Commerce Platform",
        desc: "A modern e-commerce solution offering seamless navigation and optimized buying experiences.",
        img: Kanchira,
      },
      {
        title: "DFS",
        tag: "Fintech Dashboard",
        desc: "A responsive fintech dashboard that delivers real-time insights and workflow efficiency.",
        img: DLF,
      },
      {
        title: "Kissan Mart",
        tag: "AgriTech Platform",
        desc: "A digital marketplace for farmers to access fertilizers, seeds, and crop inputs with ease.",
        img: kissanmart,
      },
    ],

    "Graphic Design": [
      {
        title: "RV Interior",
        tag: "Modern Interior Branding",
        desc: "Clean and elegant design language focused on simplicity and balanced visual systems.",
        img: RVInterior,
      },
      {
        title: "Bawarchi's",
        tag: "Authentic Recipe Showcase",
        desc: "Poster set designed with cultural richness and traditional flavor storytelling.",
        img: Bawarchi,
      },
      {
        title: "SRK",
        tag: "Turnkey Cleanroom Solutions",
        desc: "A professional brochure system for pharma, biotech, and healthcare sectors.",
        img: SRK,
      },
    ],
  };

  const [active, setActive] = useState("Designing");

  const pillRef = useRef(null);
  const highlightRef = useRef(null);

  // blue pill animation (UNCHANGED)
  useEffect(() => {
    const pill = pillRef.current;
    const highlight = highlightRef.current;
    if (!pill || !highlight) return;

    const activeTab = pill.querySelector(".tab.active");
    if (!activeTab) return;

    const INSET = 6;

    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeTab;

    let left = offsetLeft + INSET;
    let top = offsetTop + INSET;
    let width = offsetWidth - INSET * 2;
    let height = offsetHeight - INSET * 2;

    highlight.style.left = `${left}px`;
    highlight.style.top = `${top}px`;
    highlight.style.width = `${width}px`;
    highlight.style.height = `${height}px`;
  }, [active]);

  return (
    <section className="portfolio-section">
      {/* TABS NAVBAR (UNCHANGED) */}
      <nav className="tabs-nav">
        <div className="tabs-pill" ref={pillRef}>
          <span className="tab-highlight" ref={highlightRef} />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* ----------------------------------------------------
          TOP AREA — SHOW CARDS ONLY FOR FIRST 3 TABS (ADDED MOTION)
      ---------------------------------------------------- */}
      {active !== "Digital Marketing" && (
        <motion.div
          key={active}
          className="cards"
          variants={containerVariants} // Apply container variants
          initial="hidden"
          animate="visible"
        >
          {data[active].map((item, index) => (
            <motion.article
              className="card"
              key={index}
              variants={itemVariants} // Apply item variants
              whileHover={{
                y: -8, // Lift card slightly
                scale: 1.015, // Slight scale up
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)", // Enhance shadow
                transition: { duration: 0.2 },
              }}
            >
              <div className="card-inner">
                <div className="card-img-wrapper">
                  {/* Added hover effect to the image for slight zoom */}
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="card-img"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="card-img-overlay">
                    <span>View Project</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-pill">{item.tag}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}

      {/* ----------------------------------------------------
          BOTTOM AREA — ONE EXTRA COMPONENT PER TAB (UNCHANGED)
      ---------------------------------------------------- */}

      {/* Designing */}
      {active === "Designing" && (
        <>
          {/* <Component1 /> */}
          {/* <Component1 /> */}
        </>
      )}

      {/* Development */}
      {active === "Development" && (
        <>
          {/* <Component2 /> */}
          {/* <Component2 /> */}
        </>
      )}

      {/* Graphic Design */}
      {active === "Graphic Design" && (
        <>
          {/* <Component3 /> */}
          {/* <Component3 /> */}
        </>
      )}

      {/* Digital Marketing */}
      {active === "Digital Marketing" && (
        <>
          {/* existing section */}
          <DigitalMarketingSection />

          {/* <NavWithScrollUnderline /> */}
          {/* <NavWithScrollUnderline /> */}
        </>
      )}
    </section>
  );
};

export default PortfolioTabs;


