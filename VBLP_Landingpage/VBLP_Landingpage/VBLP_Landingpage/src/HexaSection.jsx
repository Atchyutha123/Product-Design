import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { HashLink } from "react-router-hash-link";
import './HexaSection.css';

// Custom SVG Icons to match exact design
const ClockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="16" stroke="#a7f350" strokeWidth="2"/>
    <path d="M20 12V20L26 24" stroke="#a7f350" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="20" r="3" fill="#a7f350"/>
  </svg>
);

const GridIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="10" height="10" rx="2" stroke="#a7f350" strokeWidth="2"/>
    <rect x="22" y="8" width="10" height="10" rx="2" stroke="#a7f350" strokeWidth="2"/>
    <rect x="8" y="22" width="10" height="10" rx="2" stroke="#a7f350" strokeWidth="2"/>
    <rect x="22" y="22" width="10" height="10" rx="2" stroke="#a7f350" strokeWidth="2"/>
  </svg>
);

const HourglassIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8H28" stroke="#a7f350" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 32H28" stroke="#a7f350" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8C12 8 12 14 20 20C28 14 28 8 28 8" stroke="#a7f350" strokeWidth="2"/>
    <path d="M12 32C12 32 12 26 20 20C28 26 28 32 28 32" stroke="#a7f350" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2" fill="#a7f350"/>
  </svg>
);

const HexaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const stats = [
    {
      icon: <ClockIcon />,
      title: "40 Hours > 10 Seconds",
      description: "We analyze your current processes to identify inefficiencies, uncovering opportunities for dramatic time savings you might not know existed."
    },
    {
      icon: <GridIcon />,
      title: "75+ Custom Solutions",
      description: "With over 75 successful implementations, we've helped organizations transform complex processes across diverse industries.",
      countUp: true,
      end: 75,
      suffix: "+"
    },
    {
      icon: <HourglassIcon />,
      title: "99.99% Efficiency Gain",
      description: "Our solutions are built to create time for truly valuable work. We help transform complex tasks into seamless operations.",
      countUp: true,
      end: 99.99,
      decimals: 2,
      suffix: "%"
    }
  ];

  return (
    <section className="hexapart1" ref={ref}>
      {/* Background Image */}
      <div className="hexapart1-bg" />
      
      {/* Corner Brackets */}
      <div className="hexapart1-bracket hexapart1-bracket-tl">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M5 95 L5 5 L95 5" stroke="#a7f350" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="hexapart1-bracket hexapart1-bracket-br">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M95 5 L95 95 L5 95" stroke="#a7f350" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <motion.div 
        className="hexapart2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Headline */}
        <motion.h1 className="hexapart2-title" variants={itemVariants}>
          What if you could<br />
          transform <span className="hexapart2-highlight">weeks of work</span><br />
          <span className="hexapart2-highlight">into minutes?</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="hexapart2-subtitle" variants={itemVariants}>
          VBLP Tech Solutions partners with forward-thinking leaders to create<br />
          solutions that eliminate repetitive tasks and unlock new opportunities.
        </motion.p>

        {/* Stats Grid */}
        <motion.div className="hexapart2-grid" variants={itemVariants}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="hexapart2-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hexapart2-icon">{stat.icon}</div>
              <h3 className="hexapart2-card-title">
                {stat.countUp ? (
                  <>
                    <CountUp 
                      end={stat.end} 
                      duration={2.5} 
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                    <span>{stat.title.replace(/^\d+\.?\d*/, '').replace(/^\+/, '').replace(/^%/, '')}</span>
                  </>
                ) : (
                  stat.title
                )}
              </h3>
              <p className="hexapart2-card-text">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="hexapart2-cta" variants={itemVariants}>
          <HashLink 
            smooth 
            to="#services" 
            // onClick={onClose} 
            style={{ textDecoration: 'none' }}
          >
          <motion.button 
            className="hexapart2-btn hexapart2-btn-secondary"
            whileHover={{ x: 5 }}
          >
            <span>See Our Services</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
          </HashLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HexaSection;