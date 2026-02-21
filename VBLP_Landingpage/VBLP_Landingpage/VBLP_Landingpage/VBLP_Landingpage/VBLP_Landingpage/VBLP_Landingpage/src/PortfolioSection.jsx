import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from 'framer-motion';
import "./PortfolioSection.css"
import p1 from "../public/vblpp1.jpeg";
import p2 from "../public/vblpp2.jpeg";
import p3 from "../public/vblpp3.jpeg";
import p4 from "../public/vblpp4.jpeg";
import p5 from "../public/vblpp5.jpeg";
import p6 from "../public/vblpp6.jpeg";
import p7 from "../public/vblpp7.jpeg";
import p8 from "../public/vblpp8.jpeg";
import p9 from "../public/vblpp9.jpeg";
import p10 from "../public/vblpp10.jpeg";
import p11 from "../public/vblpp11.jpeg";
import p13 from "../public/vblpp13.jpeg";
import p14 from "../public/vblpp14.jpeg";
import p15 from "../public/vblpp15.jpeg";
import p16 from "../public/vblpp16.jpeg";
import p17 from "../public/vblpp17.jpeg";

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const imageRefs = useRef({});

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = portfolioItems.map(item => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, item.id]));
            resolve(item.id);
          };
          img.onerror = () => resolve(item.id);
        });
      });

      await Promise.all(imagePromises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  const portfolioItems = [
  { id: 1, image: p1, category: "realestate", title: "Real Estate Branding Project", description: "Complete branding services for a luxury real estate company in Hyderabad." },
  
  { id: 2, image: p2, category: "social", title: "Digital Branding Campaign", description: "Social media branding strategy designed to boost online visibility." },
  
  { id: 3, image: p3, category: "brochure", title: "Corporate Brochure Design", description: "Professional brochure design created for brand communication and marketing." },
  
  { id: 4, image: p4, category: "3d", title: "3D Product Branding", description: "3D visualization and motion design for modern product branding." },
  
  { id: 5, image: p5, category: "logo", title: "Logo Design for Startup", description: "Creative logo design services delivered by the best branding agency in Hyderabad." },
  
  { id: 6, image: p6, category: "brochure", title: "Business Brochure Layout", description: "Modern brochure layout design for corporate branding." },
  
  { id: 7, image: p7, category: "social", title: "Instagram Branding Series", description: "Digital branding services focused on social media growth." },
  
  { id: 8, image: p8, category: "realestate", title: "Interior Branding Showcase", description: "Real estate branding and marketing materials designed for Hyderabad clients." },
  
  { id: 9, image: p9, category: "logo", title: "Technology Brand Identity", description: "Complete logo and brand identity system development." },
  
  { id: 10, image: p10, category: "3d", title: "Architectural 3D Branding", description: "Advanced 3D animation and branding visualization services." },
  
  { id: 11, image: p11, category: "social", title: "Marketing Branding Kit", description: "Full digital branding package for business marketing." },
  
  { id: 13, image: p13, category: "brochure", title: "Corporate Presentation Design", description: "High-impact brochure and presentation design services." },
  
  { id: 14, image: p14, category: "brochure", title: "Educational Branding Material", description: "Creative branding solutions for institutional marketing." },
  
  { id: 15, image: p15, category: "brochure", title: "Product Branding Brochure", description: "Professional brochure design for product branding campaigns." },
  
  { id: 16, image: p16, category: "social", title: "Social Media Marketing Design", description: "Digital branding and promotional content design." },
  
  { id: 17, image: p17, category: "brochure", title: "Corporate Branding Design", description: "Strategic branding services tailored for Hyderabad businesses." },
];


  const categories = [
  { id: "all", label: "All Branding Projects" },
  { id: "social", label: "Digital Branding" },
  { id: "brochure", label: "Brochure Design" },
  { id: "realestate", label: "Real Estate Branding" },
  { id: "logo", label: "Logo Design" },
  { id: "3d", label: "3D & Motion Design" },
];

  
  const filtered = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filtered.length
      : (currentIndex - 1 + filtered.length) % filtered.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filtered[newIndex]);
  };

  const handleImageLoad = (id) => {
    setImageLoadingStates(prev => ({ ...prev, [id]: true }));
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.85,
      rotateY: -15
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4
      }
    }
  };

  const getCardAnimation = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    
    return {
      hidden: { 
        opacity: 0,
        y: 80,
        x: (col - 1) * 30,
        scale: 0.7,
        rotateZ: (index % 2 === 0 ? -5 : 5),
        filter: "blur(10px)"
      },
      visible: { 
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateZ: 0,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 18,
          duration: 0.7,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      },
      hover: {
        y: -12,
        scale: 1.02,
        rotateZ: 2,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          duration: 0.3
        }
      }
    };
  };

  // Skeleton loader component
  const SkeletonLoader = () => (
    <motion.div 
      className="skeleton-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="skeleton-image"></div>
      <div className="skeleton-text">
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
    </motion.div>
  );

  return (
    <section className="portfolio">
      {/* Enhanced floating shapes */}
      <div className="floating-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="shape shape-2"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="shape shape-3"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      {/* Enhanced Header */}
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          ease: "easeOut",
          type: "spring"
        }}
      >
        <motion.span 
          className="section-tag"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our Branding Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Best Branding Services in Hyderabad – Our Work
        </motion.h2>
        <motion.p 
          className="header-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Explore the creative projects delivered by <span style={{color:"#ff5722"}}>VBLP Tech Solutions Pvt. Ltd.</span>, the best branding agency in <span style={{color:"#ff5722"}}>Hyderabad</span>, showcasing <strong>logo design, brochure design, motion graphics, and digital branding solutions</strong>.
        </motion.p>
        <motion.div 
          className="header-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="line-accent"></div>
        </motion.div>
      </motion.div>

      {/* Enhanced Filter buttons */}
      <motion.div 
        className="filters"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            className={filter === cat.id ? 'active' : ''}
            onClick={() => setFilter(cat.id)}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
          >
            <span className="filter-text">{cat.label}</span>
            {filter === cat.id && (
              <motion.div 
                className="filter-indicator"
                layoutId="activeFilter"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Enhanced Portfolio grid */}
      <motion.div 
        className="grid"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <AnimatePresence mode="wait">
          {filtered.map((item, index) => (
            <motion.div
              key={`${filter}-${item.id}`}
              className="card"
              variants={getCardAnimation(index)}
              whileHover="hover"
              layout
              onClick={() => openModal(item, index)}
            >
              <div className="card-border"></div>
              <div className="card-image-wrapper">
                {/* Show skeleton while loading */}
                {!imageLoadingStates[item.id] && (
                  <div className="image-skeleton">
                    <motion.div 
                      className="skeleton-shimmer"
                      animate={{ x: [-100, 200] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear"
                      }}
                    />
                  </div>
                )}
                
                <motion.img 
                  ref={el => imageRefs.current[item.id] = el}
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: imageLoadingStates[item.id] ? 1 : 0,
                    scale: imageLoadingStates[item.id] ? 1 : 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  onLoad={() => handleImageLoad(item.id)}
                  style={{ display: imageLoadingStates[item.id] ? 'block' : 'none' }}
                />
                
                <motion.div 
                  className="image-shine"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <motion.div 
                className="overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overlay-content">
                  <motion.span 
                    className="category-tag"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.category}
                  </motion.span>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.button 
                    className="view-btn"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <motion.svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Footer */}
      <motion.div 
        className="portfolio-footer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Looking for the Best Branding Agency in <span style={{color: '#f59e0b'}}>Hyderabad</span>?
        </motion.p>
        <HashLink 
          smooth 
          to="#contact" 
          // onClick={onClose} 
          style={{ textDecoration: 'none' }}
        >
        <motion.button 
          className="cta-btn"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Start Your Branding Project
          <motion.div className="btn-shine" />
        </motion.button>
        </HashLink>
      </motion.div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.7, opacity: 0, rotateX: 15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: 15 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close button */}
              <motion.button 
                className="modal-close-btn"
                onClick={closeModal}
                whileHover={{ rotate: 90, scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>

              {/* Enhanced Navigation arrows */}
              {filtered.length > 1 && (
                <>
                  <motion.button 
                    className="nav-arrow nav-prev"
                    onClick={() => navigateImage('prev')}
                    whileHover={{ x: -8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.button>
                  <motion.button 
                    className="nav-arrow nav-next"
                    onClick={() => navigateImage('next')}
                    whileHover={{ x: 8, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Enhanced Image */}
              <motion.div 
                className="modal-image-wrapper"
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  initial={{ scale: 1.1, filter: "blur(10px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Enhanced Info */}
              <motion.div 
                className="modal-info"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span 
                  className="modal-category"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedImage.category}
                </motion.span>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {selectedImage.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {selectedImage.description}
                </motion.p>
                <motion.div 
                  className="modal-counter"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {currentIndex + 1} / {filtered.length}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;