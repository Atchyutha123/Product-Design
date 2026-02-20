import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from 'framer-motion';
import "./PortfolioSection.css";

// Import all images
import p1 from "../public/vblpp1.jpeg";
import p2 from "../public/vblpp2.jpeg";
import p3 from "../public/vblpp3.png";
import p4 from "../public/vblpp4.jpeg";
import p5 from "../public/vblpp5.png";
import p6 from "../public/vblpp6.png";
import p7 from "../public/vblpp7.jpeg";
import p8 from "../public/vblpp8.png";
import p9 from "../public/vblpp9.jpeg";
import p10 from "../public/vblpp10.jpeg";
import p11 from "../public/vblpp11.jpeg";
import p13 from "../public/vblpp13.jpeg";
import p14 from "../public/vblpp14.png";
import p15 from "../public/vblpp15.png";
import p16 from "../public/vblpp16.jpeg";
import p17 from "../public/vblpp17.png";
import p18 from "../public/vblpp18.jpeg";
import p19 from "../public/vblpp19.jpeg";
import p20 from "../public/vblpp20.jpeg";
import p21 from "../public/vblpp21.jpeg";
import p22 from "../public/vblpp22.jpeg";
import p23 from "../public/vblpp23.jpeg";
import p24 from "../public/vblpp24.jpeg";
import p25 from "../public/vblpp25.jpeg";
import p26 from "../public/vblpp26.jpeg";
import p27 from "../public/vblpp27.png";
import p28 from "../public/vblpp28.png";
import p29 from "../public/vblpp29.png";
import p30 from "../public/vblpp30.jpg";
import p31 from "../public/vblpp31.png";
import p32 from "../public/vblpp32.png";

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(new Set());
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const observerRef = useRef(null);
  const gridRef = useRef(null);

  // Memoize portfolio items to prevent recalculation
  const portfolioItems = useMemo(() => [
    { id: 1, image: p1, category: "social", title: "Real Estate Branding Project", description: "Complete branding services for a luxury real estate company in Hyderabad." },
    { id: 30, image: p30, category: "realestate", title: "Digital Branding Campaign", description: "Professional corporate brochure design for GVR VBLP", pdfLink: "/GVR_VBLP.pdf"  },
    { id: 14, image: p14, category: "brochure", title: "New Generation Co School Brochure", description: "Professional corporate brochure design for New Generation Co School.", pdfLink: "/vblp_b6.pdf" },
    { id: 4, image: p4, category: "3d", title: "3D Product Branding", description: "3D visualization and motion design for modern product branding." },
    { id: 5, image: p5, category: "logo", title: "Logo Design for Startup", description: "Creative logo design services delivered by the best branding agency in Hyderabad." },
    { id: 6, image: p6, category: "brochure", title: "New Generation Co School Brochure", description: "Professional corporate brochure design for New Generation Co School.", pdfLink: "/vblp_b5.pdf" },
    { id: 7, image: p7, category: "social", title: "Instagram Branding Series", description: "Digital branding services focused on social media growth." },
    { id: 8, image: p8, category: "logo", title: "New Generation Co School Brochure", description: "Professional corporate brochure design for New Generation Co School.", pdfLink: "/vblp_b7.pdf" },
    { id: 9, image: p9, category: "logo", title: "Technology Brand Identity", description: "Complete logo and brand identity system development." },
    { id: 10, image: p10, category: "logo", title: "Architectural 3D Branding", description: "Advanced 3D animation and branding visualization services." },
    { id: 11, image: p11, category: "brochure", title: "Marketing Branding Kit", description: "Full digital branding package for business marketing." },
    { id: 13, image: p13, category: "brochure", title: "Corporate Presentation Design", description: "High-impact brochure and presentation design services." },
    { id: 3, image: p3, category: "brochure", title: "Gupta Realty Brochure", description: "Professional corporate brochure design for Gupta Realty.", pdfLink: "/vblp_b3.pdf" },
    { id: 15, image: p15, category: "brochure", title: "New Generation Co School Brochure", description: "Professional corporate brochure design for New Generation Co School.", pdfLink: "/vblp_b4.pdf" },
    { id: 16, image: p16, category: "social", title: "Social Media Marketing Design", description: "Digital branding and promotional content design." },
    { id: 17, image: p17, category: "brochure", title: "Corporate Branding Design", description: "Strategic branding services tailored for Hyderabad businesses.", pdfLink: "/vblp_b8.pdf" },
    { id: 18, image: p18, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 19, image: p19, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 20, image: p20, category: "logo", title: "Corporate Brand Identity", description: "Complete logo and brand identity system development." },
    { id: 21, image: p21, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 22, image: p22, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 23, image: p23, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 24, image: p24, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 25, image: p25, category: "social", title: "Social Media Branding Campaign", description: "Complete social media branding and campaign design." },
    { id: 26, image: p26, category: "brochure", title: "Corporate Branding Design", description: "Strategic branding services tailored for Hyderabad businesses." },
    { id: 27, image: p27, category: "logo", title: "Technology Brand Identity", description: "Complete logo and brand identity system development." },
    { id: 28, image: p28, category: "logo", title: "Technology Brand Identity", description: "Complete logo and brand identity system development." },
    { id: 29, image: p29, category: "logo", title: "Technology Brand Identity", description: "Complete logo and brand identity system development." },
    { id: 2, image: p2, category: "realestate", title: "GVR VBLP Corporate Brochure", description: "Professional corporate brochure design for GVR VBLP.", },
    { id: 31, image: p31, category: "brochure", title: "Cognizioni Corporate Brochure", description: "Professional corporate brochure design for Cognizioni.", pdfLink: "/vblp_b1.pdf" },
    { id: 32, image: p32, category: "brochure", title: "New Generation Co School Brochure", description: "Professional corporate brochure design for New Generation Co School.", pdfLink: "/vblp_b2.pdf" },
  ], []);

  const categories = useMemo(() => [
    { id: "all", label: "All Branding Projects" },
    { id: "social", label: "Digital Branding" },
    { id: "brochure", label: "Brochure Design" },
    { id: "realestate", label: "Real Estate Branding" },
    { id: "logo", label: "Logo Design" },
    { id: "3d", label: "3D & Motion Design" },
  ], []);

  // Filter items based on category
  const filtered = useMemo(() => 
    filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter),
    [filter, portfolioItems]
  );

  // Initialize Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            if (id) {
              setVisibleImages((prev) => {
                const newSet = new Set(prev);
                newSet.add(id);
                return newSet;
              });
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe elements when filter changes
  useEffect(() => {
    // Reset visible images when filter changes to trigger new observations
    setVisibleImages(new Set());
    
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      if (gridRef.current && observerRef.current) {
        const cards = gridRef.current.querySelectorAll('[data-id]');
        cards.forEach((card) => {
          observerRef.current.observe(card);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [filter]);

  // Debounced image load handler
  const handleImageLoad = useCallback((id) => {
    setImageLoadingStates((prev) => ({ ...prev, [id]: true }));
  }, []);

  const openModal = useCallback((item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const getCardAnimation = (index) => ({
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    },
    hover: {
      y: -12,
      scale: 1.02,
      rotateZ: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  });

  return (
    <section className="portfolio">
      {/* Floating shapes */}
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
        />
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
        />
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
        />
      </div>

      {/* Header */}
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 20 }}
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

      {/* Filter buttons */}
      <motion.div 
        className="filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            className={filter === cat.id ? 'active' : ''}
            onClick={() => setFilter(cat.id)}
            whileHover={{ scale: 1.05, y: -2 }}
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

      {/* Portfolio grid */}
      <motion.div 
        className="grid"
        ref={gridRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={filter}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => {
            const isVisible = visibleImages.has(String(item.id));
            const isLoaded = imageLoadingStates[item.id];
            
            return (
              <motion.div
                key={`${filter}-${item.id}`}
                className="card"
                variants={getCardAnimation(index)}
                whileHover="hover"
                layout
                onClick={() => openModal(item, index)}
                data-id={item.id}
              >
                <div className="card-border"></div>
                <div className="card-image-wrapper">
                  {/* Skeleton loader */}
                  {!isLoaded && (
                    <div className="image-skeleton">
                      <div className="skeleton-shimmer" />
                    </div>
                  )}
                  
                  {/* Actual image - only render when visible */}
                  {isVisible && (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleImageLoad(item.id)}
                      style={{ 
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease'
                      }}
                    />
                  )}
                  
                  <div className="image-shine" />
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
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Footer */}
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
          </motion.button>
        </HashLink>
      </motion.div>

      {/* Modal */}
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
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="modal-close-btn"
                onClick={closeModal}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>

              <motion.div 
                className="modal-image-wrapper"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedImage.pdfLink ? (
                  <iframe
                    src={selectedImage.pdfLink}
                    width="100%"
                    height="600px"
                    title="Project Brochure"
                    style={{ borderRadius: "12px", border: "none" }}
                  />
                ) : (
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    loading="eager"
                  />
                )}
              </motion.div>

              <motion.div 
                className="modal-info"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="modal-category">
                  {selectedImage.category}
                </span>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;