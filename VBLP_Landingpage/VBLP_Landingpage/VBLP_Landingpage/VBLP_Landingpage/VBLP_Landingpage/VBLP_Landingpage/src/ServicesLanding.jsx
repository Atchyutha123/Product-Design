import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Zap, 
  Palette, 
  Layout, 
  Video, 
  Box, 
  Globe, 
  ShoppingCart, 
  TrendingUp,
  ArrowRight,
  Clock,
  Users,
  Award,
  ChevronRight
} from "lucide-react";
import "./ServicesLanding.css";

const allServices = [
  { 
    id: "01", 
    title: "Logo Design Services in Hyderabad", 
    img: "https://www.vblp.co.in/images/logo.jpg",
    icon: <Palette size={24} />,
    description: "As the best branding agency in Hyderabad, VBLP Tech Solutions Pvt. Ltd. creates professional logo designs that build strong and memorable brand identities.",
    features: [
      "Custom Logo Concepts",
      "Brand Identity Development",
      "Vector & Source Files",
      "Multiple Revisions"
    ],
    duration: "1-2 Days",
    color: "#FF6B6B"
  },
  { 
    id: "02", 
    title: "Company Visual Identity Design", 
    img: "https://www.vblp.co.in/images/Visual.jpg",
    icon: <Layout size={24} />,
    description: "We provide complete visual identity branding services in Hyderabad including color palette, typography, and brand guidelines for consistent brand presence.",
    features: [
      "Brand Style Guide",
      "Typography System",
      "Color Palette Design",
      "Brand Asset Kit"
    ],
    duration: "2-3 Days",
    color: "#4ECDC4"
  },
  { 
    id: "03", 
    title: "Brochure Design Services", 
    img: "https://www.vblp.co.in/images/brochure.jpg",
    icon: <Layout size={24} />,
    description: "Professional brochure design services that communicate your business story clearly and enhance your marketing impact.",
    features: [
      "Corporate Brochures",
      "Product Catalog Design",
      "Print-Ready Files",
      "Creative Layout Design"
    ],
    duration: "1-2 Days",
    color: "#45B7D1"
  },
  { 
    id: "04", 
    title: "Motion Graphics & Animation", 
    img: "https://www.vblp.co.in/images/animation.jpg",
    icon: <Video size={24} />,
    description: "Top digital branding services in Hyderabad including motion graphics and animation that make your brand visually powerful and engaging.",
    features: [
      "Logo Animation",
      "2D Motion Graphics",
      "Explainer Videos",
      "Social Media Animations"
    ],
    duration: "2-3 Days",
    color: "#96CEB4"
  },
  { 
    id: "05", 
    title: "3D Animation Services", 
    img: "https://ridda.starplatethemes.com/assets/images/services/service-timeline5.jpg",
    icon: <Box size={24} />,
    description: "High-quality 3D animation services that enhance product visualization and strengthen digital branding strategies.",
    features: [
      "3D Product Modeling",
      "Architectural Visualization",
      "3D Character Animation",
      "Advanced Rendering"
    ],
    duration: "3-4 Days",
    color: "#DDA0DD"
  },
  { 
    id: "06", 
    title: "Website Branding Solutions", 
    img: "https://www.vblp.co.in/images/brand.jpg",
    icon: <Globe size={24} />,
    description: "Complete website branding solutions combining UI/UX design with strategic digital branding to improve online visibility.",
    features: [
      "Responsive Website Design",
      "UI/UX Branding",
      "Landing Page Branding",
      "Brand Consistency"
    ],
    duration: "3-4 Days",
    color: "#FFD93D"
  },
  { 
    id: "07", 
    title: "E-Commerce Branding & Development", 
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600",
    icon: <ShoppingCart size={24} />,
    description: "E-commerce branding services in Hyderabad designed to increase conversions and strengthen your digital presence.",
    features: [
      "Online Store Branding",
      "Payment Integration",
      "Mobile Optimization",
      "Conversion Strategy"
    ],
    duration: "4-6 Days",
    color: "#FF8C42"
  },
  { 
    id: "08", 
    title: "Digital Branding Strategy", 
    img: "https://www.vblp.co.in/images/statinary.jpg",
    icon: <TrendingUp size={24} />,
    description: "Strategic digital branding services that help businesses in Hyderabad grow through data-driven marketing and brand positioning.",
    features: [
      "Market Research",
      "Competitor Analysis",
      "Brand Positioning Strategy",
      "Growth Planning"
    ],
    duration: "2-3 Days",
    color: "#6BCB77"
  },
];


// Stagger Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  },
};

const rightItemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  },
};

// Popup Animation Variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const popupVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 50,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 25,
      delay: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: 30,
    filter: "blur(10px)",
    transition: { duration: 0.2 }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + (i * 0.1), duration: 0.4 }
  })
};

export default function ServicesLanding() {
  const [activeItem, setActiveItem] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  // Continuous Rotation Animation
  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (!activeItem) {
        setRotation((prev) => prev + deltaTime * 0.02);
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [activeItem]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  const getItemStyle = (index) => {
    const angleStep = (2 * Math.PI) / allServices.length;
    const baseAngle = index * angleStep + (rotation * Math.PI) / 180;
    const radius = 260; 
    const x = Math.cos(baseAngle) * radius;
    const y = Math.sin(baseAngle) * radius;

    const normalizedY = (y + radius) / (radius * 2);
    const scale = 0.6 + (normalizedY * 0.4);
    const zIndex = Math.floor(normalizedY * 10);
    const opacity = 0.3 + (normalizedY * 0.7);

    return {
      transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  const getActiveItemStyle = (index) => {
     return {
        transform: `translate(-50%, -50%) translate3d(0px, 120px, 0) scale(1.2)`,
        zIndex: 100,
        opacity: 1,
        filter: "brightness(1.1)",
     };
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <section className="serviceLandingSection">
      {/* Light Mode Background Elements */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <div className="serviceHeader">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="serviceBadge"
        >
          <Sparkles size={14} /> Best Branding Services in Hyderabad
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="serviceHeading"
        >
          Top Digital Branding Services in <span style={{color:"#ff5722"}}>Hyderabad</span>
        </motion.h2>
      </div>

      <div className="mainLayoutWrapper">
        {/* LEFT COLUMN */}
        <motion.div 
          className="columnSide left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allServices.slice(0, 4).map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onHover={setActiveItem} 
              onClick={handleServiceClick}
              isActive={activeItem?.id === service.id} 
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* CENTER INTERACTIVE AREA */}
        <motion.div 
          className="centerVisualContainer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="orbitBase">
            
            {/* ORBITING IMAGES */}
            {allServices.map((s, i) => {
              const isActive = activeItem?.id === s.id;
              const style = isActive ? getActiveItemStyle(i) : getItemStyle(i);
              
              return (
                <motion.div
                  key={`orbit-${s.id}`}
                  className={`orbitThumb ${isActive ? 'active' : ''}`}
                  initial={false}
                  animate={style}
                  transition={{ type: "spring", stiffness: 60, damping: 20 }}
                  onClick={() => handleServiceClick(s)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={s.img} alt={s.title} />
                </motion.div>
              );
            })}

            {/* CENTER MAIN DISPLAY */}
            <div className="centerStage">
                <AnimatePresence mode="wait">
                <motion.div
                    key={activeItem ? activeItem.id : 'default'}
                    className="mainFeaturedDisplay"
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div 
                      className="featuredFrame"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      onClick={() => handleServiceClick(activeItem || allServices[0])}
                      style={{ cursor: 'pointer' }}
                    >
                    <img 
                        src={activeItem ? activeItem.img : allServices[0].img} 
                        alt={activeItem ? activeItem.title : allServices[0].title} 
                    />
                    <div className="glassOverlay">
                        <h4>{activeItem ? activeItem.title : allServices[0].title}</h4>
                        <p>Click to Explore</p>
                    </div>
                    </motion.div>
                </motion.div>
                </AnimatePresence>
            </div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div 
          className="columnSide right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allServices.slice(4, 8).map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onHover={setActiveItem} 
              onClick={handleServiceClick}
              isActive={activeItem?.id === service.id} 
              alignRight
              variants={rightItemVariants}
            />
          ))}
        </motion.div>
      </div>

      {/* INNOVATIVE POPUP MODAL - CENTERED */}
      <AnimatePresence>
        {selectedService && (
          <ServicePopup 
            service={selectedService} 
            onClose={closePopup} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

const ServiceCard = ({ service, onHover, onClick, isActive, alignRight, variants }) => (
  <motion.div
    variants={variants}
    className={`serviceItemRow ${isActive ? "isActive" : ""}`}
    onMouseEnter={() => onHover(service)}
    onMouseLeave={() => onHover(null)}
    onClick={() => onClick(service)}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className={`serviceRowContent ${alignRight ? 'rightAlign' : ''}`}>
      <span className="serviceID">{service.id}</span>
      <h3 className="serviceLabel">{service.title}</h3>
      <motion.div
        animate={isActive ? { rotate: 45, x: 3, y: -3 } : { rotate: 0, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ArrowUpRight className="serviceLinkIcon" size={18} />
      </motion.div>
    </div>
  </motion.div>
);

const ServicePopup = ({ service, onClose }) => {
  return (
    <>
      {/* Backdrop Overlay */}
      <motion.div 
        className="popupOverlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      {/* Main Popup Container - PERFECTLY CENTERED */}
      <div className="popupWrapper">
        <motion.div 
          className="popupContainer"
          variants={popupVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <motion.button 
            className="popupCloseBtn"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>

          <div className="popupContent">
            {/* Left Side - Image & Visuals */}
            <div className="popupVisual">
              <motion.div 
                className="popupImageWrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img src={service.img} alt={service.title} />
                <div className="popupImageOverlay" style={{ background: `linear-gradient(135deg, ${service.color}40, transparent)` }} />
                
                {/* Floating Badge */}
                <motion.div 
                  className="popupFloatingBadge"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  style={{ background: service.color }}
                >
                  <Zap size={16} fill="white" />
                  <span>Premium</span>
                </motion.div>
              </motion.div>

              {/* Quick Stats */}
              <div className="popupStats">
                <motion.div 
                  className="statItem"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Clock size={20} style={{ color: service.color }} />
                  <div>
                    <span className="statLabel">Timeline</span>
                    <span className="statValue">{service.duration}</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="statItem"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Users size={20} style={{ color: service.color }} />
                  <div>
                    <span className="statLabel">Team Size</span>
                    <span className="statValue">2-4 Experts</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="statItem"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Award size={20} style={{ color: service.color }} />
                  <div>
                    <span className="statLabel">Quality</span>
                    <span className="statValue">100% Guaranteed</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="popupDetails">
              {/* Header */}
              <motion.div 
                className="popupHeader"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="popupIcon" style={{ background: `${service.color}20`, color: service.color }}>
                  {service.icon}
                </div>
                <div className="popupTitleGroup">
                  <h2>{service.title}</h2>
                  <span className="popupPrice">{service.price}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="popupDescription"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>

              {/* Features List */}
              <div className="popupFeatures">
                <h3>What You Get With Our Branding Services</h3>
                <div className="featuresList">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="featureItem"
                      custom={index}
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ x: 5, backgroundColor: `${service.color}10` }}
                    >
                      <div className="featureCheck" style={{ background: service.color }}>
                        <CheckCircle2 size={16} color="white" />
                      </div>
                      <span>{feature}</span>
                      <ChevronRight size={16} className="featureArrow" style={{ color: service.color }} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="popupActions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <HashLink 
                  smooth 
                  to="#projects" 
                  onClick={onClose} 
                  style={{ textDecoration: 'none' }}
                >
                  <motion.button 
                    className="popupPrimaryBtn"
                    style={{ background: service.color, width: '100%' }}
                    whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${service.color}40` }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Projects
                    <ArrowRight size={18} />
                  </motion.button>
                </HashLink>
                
                <HashLink 
                  smooth 
                  to="#contact" 
                  onClick={onClose} 
                  style={{ textDecoration: 'none' }}
                >
                  <motion.button 
                    className="popupSecondaryBtn"
                    style={{ width: '100%' }}
                    whileHover={{ scale: 1.02, backgroundColor: '#f0f0f0' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </HashLink>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="popupDecorations">
            <motion.div 
              className="decoCircle"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ borderColor: `${service.color}30` }}
            />
            <motion.div 
              className="decoDots"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};