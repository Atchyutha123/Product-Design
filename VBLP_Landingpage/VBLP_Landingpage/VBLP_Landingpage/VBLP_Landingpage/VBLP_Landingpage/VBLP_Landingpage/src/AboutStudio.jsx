import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Rocket, Monitor } from 'lucide-react';
import './AboutSection.css';
import { HashLink } from "react-router-hash-link";

const AboutStudio = () => {
  const [activeImage, setActiveImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
  };

  const features = [
  { 
    text: 'Step 01 – Brand Research & Strategy', 
    icon: <Layers size={20} />, 
    img: 'https://www.vblp.co.in/images/statinary.jpg' 
  },
  { 
    text: 'Step 02 – Logo & Visual Identity Design', 
    icon: <Rocket size={20} />, 
    img: 'https://www.vblp.co.in/images/logo.jpg' 
  },
  { 
    text: 'Step 03 – Marketing & Brand Collateral', 
    icon: <Monitor size={20} />, 
    img: 'https://www.vblp.co.in/images/brochure.jpg' 
  },
  { 
    text: 'Step 04 – Digital Branding & Launch', 
    icon: <Sparkles size={20} />, 
    img: 'https://www.vblp.co.in/images/animation.jpg' 
  },
];


  return (
    <section className="aboutSection">
      {/* Decorative Star */}
      <div className="sticker s1">✦</div>

      <motion.div 
        className="aboutContainer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT SIDE: Visual Orbit/Image Area */}
        <div className="visualArea">
          <div className="visualContentWrapper">
            {/* Background Orbit Path */}
            <motion.div 
              className="orbit-container"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="orbit-path" />
            </motion.div>

            {/* Dynamic Content: Bubbles OR Image */}
            <AnimatePresence mode="wait">
              {activeImage ? (
                <motion.div 
                  key="preview-img"
                  className="imagePreview"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                  <img src={activeImage} alt="Feature Preview" />
                </motion.div>
              ) : (
                <motion.div 
                  key="floating-bubbles"
                  className="bubblesContainer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div className="bubble b-dev" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                    Prototyping
                  </motion.div>
                  <motion.div className="bubble b-web" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    User First
                  </motion.div>
                  <motion.div className="bubble b-mobile" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                    Scale Fast
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="contentArea">
          <motion.div variants={itemVariants} className="badge">
            <Sparkles size={14} className="icon-spin" /> Branding & Digital Identity Experts
          </motion.div>

          <motion.h2 className="mainTitle" variants={itemVariants}>
            We build <span className="text-gradient">brands</span> that stand out in <span style={{color:"#ff5722"}}>Hyderabad</span>
          </motion.h2>

          <motion.p className="description" variants={itemVariants}>
            At <span style={{color:"#ff5722"}}>VBLP Tech Solutions Pvt. Ltd.</span>, we provide <span style={{color:"#ff5722"}}>professional branding services</span> in <span style={{color:"#ff5722"}}>Hyderabad</span> including <strong>logo design, brochure design, motion graphics, animation, and complete digital branding solutions.</strong> From concept to execution, we help businesses create powerful brand identities that build trust, attract customers, and drive long-term growth.
          </motion.p>

          <div className="featuresGrid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="featureCard"
                variants={itemVariants}
                onMouseEnter={() => setActiveImage(feature.img)}
                onMouseLeave={() => setActiveImage(null)}
                whileHover={{ x: 10 }}
              >
                <div className="featureIcon">{feature.icon}</div>
                <span className="featureText">{feature.text}</span>
              </motion.div>
            ))}
          </div>
            <HashLink 
                smooth 
                to="#projects" 
                style={{ textDecoration: 'none' }}
              >
          <motion.button className="ctaButton" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span>Explore Our Branding Work</span>
            <ArrowRight size={20} />
          </motion.button>
          </HashLink>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutStudio;