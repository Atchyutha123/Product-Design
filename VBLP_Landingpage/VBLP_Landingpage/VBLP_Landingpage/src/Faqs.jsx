import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faqs.css';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Why choose VBLP Tech Solutions Pvt. Ltd. for branding services in Hyderabad?",
      a: "With over 10 years of experience, VBLP Tech Solutions Pvt. Ltd. is recognized as the best brand design company in Hyderabad. We offer end-to-end branding solutions including logo design, brand strategy, visual identity, and brand guidelines. Our team of creative experts ensures your brand stands out in the competitive market with unique and memorable designs.",
    },
    {
      q: "What branding services does VBLP Tech Solutions Pvt. Ltd. offer?",
      a: "We provide comprehensive branding services including: Logo Design & Identity, Brand Strategy & Positioning, Visual Identity Systems, Brand Guidelines, Packaging Design, Marketing Collateral, Digital Branding, Rebranding Services, and Brand Consultation. Each service is tailored to meet your specific business needs and target audience.",
    },
    {
      q: "How much does it cost to build a complete brand identity?",
      a: "Our branding packages start from affordable rates for startups to comprehensive enterprise solutions. The cost depends on your requirements, scope of work, and deliverables. We offer flexible pricing models and ensure maximum ROI for your branding investment. Contact us for a free consultation and customized quote.",
    },
    {
      q: "What is the process of brand development at VBLP Tech Solutions Pvt. Ltd.?",
      a: "Our brand development process includes: 1) Discovery & Research - Understanding your business, audience, and competition. 2) Strategy - Defining brand positioning, personality, and messaging. 3) Design - Creating visual elements like logo, colors, and typography. 4) Implementation - Applying brand across all touchpoints. 5) Management - Ongoing support and brand evolution.",
    },
    {
      q: "How long does it take to complete a branding project?",
      a: "A typical branding project takes 4-8 weeks depending on complexity. Logo design takes 2-3 weeks, complete brand identity takes 4-6 weeks, and comprehensive rebranding projects may take 8-12 weeks. We ensure timely delivery without compromising on quality, keeping you involved at every stage.",
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-container">
        
        {/* Header */}
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="faq-badge">Have Questions?</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about our branding services. 
            Can't find what you're looking for? Feel free to contact us.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="faq-grid">
          
          {/* Left Side - Image */}
          <motion.div 
            className="faq-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="faq-image-container">
              <motion.img
                src="https://img.freepik.com/free-vector/organic-flat-people-asking-questions-illustration_23-2148890145.jpg"
                alt="VBLP Branding FAQ"
                className="faq-image"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="floating-card card-1">
                <span className="card-icon">🎨</span>
                <span className="card-text">500+ Brands</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">⭐</span>
                <span className="card-text">4.9 Rating</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">🏆</span>
                <span className="card-text">#1 in Hyd</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ List */}
          <motion.div 
            className="faq-list"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="question-content">
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-text">{faq.q}</span>
                  </div>
                  <motion.span 
                    className="faq-toggle"
                    animate={{ 
                      rotate: openIndex === index ? 45 : 0,
                      backgroundColor: openIndex === index ? '#ff5722' : '#e9edf2'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <motion.div 
                        className="faq-answer-content"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Faqs;