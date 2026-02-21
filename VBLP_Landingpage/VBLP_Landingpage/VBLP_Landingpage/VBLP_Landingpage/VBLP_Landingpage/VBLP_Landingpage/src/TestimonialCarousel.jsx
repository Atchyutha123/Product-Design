import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import smartwalllogo1 from "../public/smartwalllogo.jpeg";
import kanchiralogo1 from "../public/kanchira.jpeg"
import kissanmartlogo1 from "../public/kissanmart.jpeg"
import meenalogo1 from "../public/meenalogo.jpeg"

// Placeholder images for demo
const smartwalllogo = "https://via.placeholder.com/48/3b82f6/ffffff?text=S";
const kanchiralogo = "https://via.placeholder.com/48/ec4899/ffffff?text=K";
const kissanmartlogo = "https://via.placeholder.com/48/10b981/ffffff?text=K";
const meenalogo = "https://via.placeholder.com/48/f59e0b/ffffff?text=M";

const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    quote: "SmartWall required a scalable and high-performance website. The team delivered a secure, fast-loading platform that enhanced efficiency beyond our expectations.",
    author: "SmartWall",
    role: "Technology Solutions",
    image: smartwalllogo1,
    rating: 4.9,
    phone: "+1 234 567 890",
    website: "www.smartwall.com"
  },
  {
    id: 2,
    quote: "Kanchira needed a design-forward website reflecting our artistic identity. The platform strengthened our brand presence and improved engagement by 300%.",
    author: "Kanchira Studio",
    role: "Creative Agency",
    image: kanchiralogo1,
    rating: 4.9,
    phone: "+1 234 567 891",
    website: "www.kanchira.com"
  },
  {
    id: 3,
    quote: "Kissan E-Mart needed a robust eCommerce solution offering reliability and speed. The team delivered a seamless shopping experience that increased our conversions.",
    author: "Kissan E-Mart",
    role: "E-Commerce Platform",
    image: kissanmartlogo1,
    rating: 4.8,
    phone: "+1 234 567 892",
    website: "www.kissanemart.com"
  },
  {
    id: 4,
    quote: "Meena Maqua wanted a clean, professional website. The modern interface and intuitive navigation positively impacted our brand credibility and client trust.",
    author: "Meena Maqua",
    role: "Professional Services",
    image: meenalogo1,
    rating: 5.0,
    phone: "+1 234 567 893",
    website: "www.meenamequa.com"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .testimonial-wrapper {
          font-family: 'Inter', sans-serif;
          // background-color: #f8fafc;
          padding: 60px 20px;
        }

        .testimonial-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 968px) {
          .testimonial-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Part 1 - Left Side Content */
        .testimonial-part1 {
          max-width: 480px;
        }

        .testimonial-badge {
          display: inline-block;
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          font-size: 0.875rem;
          color: #ff5722;
          margin-bottom: 20px;
          font-weight: 500;
          background: #ff57221a;
        }

        .testimonial-heading {
          font-size: 2.75rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        @media (max-width: 768px) {
          .testimonial-heading {
            font-size: 2rem;
          }
        }

        .testimonial-desc {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .testimonial-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .testimonial-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .testimonial-dot.active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: #0f172a;
        }

        /* Part 2 - Right Side Carousel */
        .testimonial-part2 {
          position: relative;
          min-height: 320px;
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 10px 30px -5px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
        }

        .testimonial-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .testimonial-quote-icon {
          flex-shrink: 0;
        }

        .testimonial-company {
          font-weight: 700;
          font-size: 1.125rem;
          color: #3b82f6;
        }

        .testimonial-quote-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #f1f5f9;
        }

        .testimonial-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .testimonial-author-name {
          font-weight: 600;
          color: #0f172a;
          font-size: 0.9375rem;
        }

        .testimonial-author-role {
          color: #64748b;
          font-size: 0.875rem;
        }
      `}</style>

      <section className="testimonial-wrapper">
        <div className="testimonial-container">
          
          {/* Part 1 - Left Side */}
          <div className="testimonial-part1">
            <motion.div 
              className="testimonial-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Testimonials
            </motion.div>
            
            <motion.h2 
              className="testimonial-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              1580+ Customer Say About Our Services
            </motion.h2>
            
            <motion.p 
              className="testimonial-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A web design agency is dedicated to creating visually stunning and highly functional websites that help businesses grow.
            </motion.p>

            <motion.div 
              className="testimonial-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Part 2 - Right Side Carousel */}
          <div className="testimonial-part2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 35 },
                  opacity: { duration: 0.25 }
                }}
                className="testimonial-card"
              >
                <div className="testimonial-card-header">
                  <div className="testimonial-quote-icon">
                    <QuoteIcon />
                  </div>
                  <div className="testimonial-company">
                    {currentTestimonial.author}
                  </div>
                </div>

                <p className="testimonial-quote-text">
                  "{currentTestimonial.quote}"
                </p>

                <div className="testimonial-author">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-author-info">
                    <span className="testimonial-author-name">{currentTestimonial.author}</span>
                    <span className="testimonial-author-role">{currentTestimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;