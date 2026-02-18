import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, User, Mail, Phone, MessageSquare, Send, X } from 'lucide-react';
import './HeroStackedImages.css';
import vkvedio from "../public/vkvedio.mp4";
import { HashLink } from "react-router-hash-link";

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="video-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="video-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            <div className="video-wrapper">
              <video
                controls
                autoPlay
                className="video-player"
                poster="/path-to-poster-image.jpg"
              >
                <source src={vkvedio} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TrialForm = () => {
  return (
    <div className="trial-card">
      <div className="trial-header">
        <h3>Start your design journey today</h3>
      </div>
      
      <form className="trial-form" onSubmit={(e) => e.preventDefault()}>
        
        {/* Name Input */}
        <div className="form-group">
          <label>Name</label>
          <div className="input-wrapper">
            <User size={18} className="input-icon" />
            <input type="text" placeholder="Name :" required />
          </div>
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label>Email</label>
          <div className="input-wrapper">
            <Mail size={18} className="input-icon" />
            <input type="email" placeholder="Email :" required />
          </div>
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label>Phone No.</label>
          <div className="input-wrapper">
            <Phone size={18} className="input-icon" />
            <input type="tel" placeholder="+12 12458 854" required />
          </div>
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label>Project Details</label>
          <div className="input-wrapper textarea-wrapper">
            <MessageSquare size={18} className="input-icon textarea-icon" />
            <textarea placeholder="Tell us about your project..." rows="3"></textarea>
          </div>
        </div>

        <motion.button 
          type="submit" 
          className="submit-btn1"
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(255, 87, 34, 0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
          <Send size={16} style={{ marginLeft: '8px' }} />
        </motion.button>
      </form>
    </div>
  );
};

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="hero-container">
      {/* Background Image with Overlay */}
      <div className="hero-background" />

      {/* Content Wrapper */}
      <div className="hero-content">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Complete Branding Services for a Stronger Identity
          </h1>
          <p className="hero-subtitle">
            At VBLP Tech Solutions Pvt. Ltd., we help you build a memorable brand identity from the ground up. From logo design to motion graphics, digital strategy, and beyond—our expert team delivers visual consistency and marketing clarity across every touchpoint.
          </p>
          
          <div className="hero-buttons">
  <HashLink 
    smooth 
    to="#projects" 
    style={{ textDecoration: 'none' }}
  >
    <motion.button 
      className="btn btn-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Start Project
      <ArrowRight size={18} style={{ marginLeft: '8px' }} />
    </motion.button>
  </HashLink>
  
  <motion.button 
    className="btn btn-play"
    whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
    whileTap={{ scale: 0.9 }}
    onClick={openVideo}
  >
    <Play size={20} fill="#ff5722" color="#ff5722" />
    <span>See Work</span>
  </motion.button>
</div>
        </motion.div>

        {/* Right Side: The Floating Form */}
        <motion.div 
          className="hero-form-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TrialForm />
        </motion.div>

      </div>

      {/* The White Curve at the Bottom */}
      <div className="hero-curve">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg " preserveAspectRatio="none">
          <path d="M0 100L1440 100L1440 0C1440 0 1140 100 720 100C300 100 0 0 0 0L0 100Z" fill="white"/>
        </svg>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
    </section>
  );
};

export default Hero;