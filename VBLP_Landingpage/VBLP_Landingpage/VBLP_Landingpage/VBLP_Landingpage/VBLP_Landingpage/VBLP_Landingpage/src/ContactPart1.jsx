import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight, 
  CheckCircle2,
  MessageSquare,
  User,
  AtSign,
  Briefcase,
  Clock,
  Sparkles,
  Star,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactPart1.css';

export default function ContactPart1() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ fullName: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="bg-decoration" style={{ width: '600px', height: '600px', background: '#fed7aa', top: '-200px', left: '-200px' }} />
      <div className="bg-decoration" style={{ width: '500px', height: '500px', background: '#ddd6fe', bottom: '-150px', right: '-150px' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="contact-card"
      >
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="floating-tag" style={{ top: '10%', right: '-20px' }}>
            <Star size={16} color="#fbbf24" fill="#fbbf24" />
            <span>Top Rated</span>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="badge">
                <Sparkles size={16} />
                <span>Get in Touch</span>
              </div>
              
              <h1 className="main-heading">
                Work with the Best Branding Agency in <span style={{color: '#f59e0b'}}>Hyderabad</span>
              </h1>
              <p className="subheading">
                Ready to grow your business with professional branding services? <span style={{color: '#f59e0b'}}>VBLP Tech Solutions Pvt. Ltd</span>. offers <strong>logo design, brochure design, motion graphics, and complete digital branding solutions</strong> in <span style={{color:"#f59e0b"}}>Hyderabad</span>. Let’s build a powerful brand identity together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="info-grid"
            >
              <div className="info-card">
                <div className="info-icon-box">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="info-label">Call Us</div>
                  <div className="info-value">8309390566</div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="info-label">Email Us</div>
                  <div className="info-value">info@vblptechsolutions.com</div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="info-label">Visit Us</div>
                  <div className="info-value">KPHB, Hitech City Road, Hyderabad</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="success-card"
              >
                <CheckCircle2 size={64} color="#22c55e" style={{marginBottom: '1rem'}} />
                <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem'}}>
                  Request Received Successfully!
                </h3>
                <p style={{color: '#15803d', fontSize: '1rem'}}>
                  Thank you for contacting <span style={{color: '#f59e0b'}}>VBLP Tech Solutions Pvt. Ltd</span>. Our branding experts will connect with you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{width: '100%'}}
              >
                <div className="form-header">
                  <h2 className="form-heading">Start Your Branding Project Today</h2>
                  <p className="form-subheading">
                    Tell us about your branding requirements and our Hyderabad team will respond quickly with the best solution.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group1">
                      <label className="label1">
                        <User size={16} color="#f97316" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        value={formState.fullName}
                        onChange={handleChange}
                        required
                        className="input"
                      />
                    </div>

                    <div className="form-group1">
                      <label className="label1">
                        <Phone size={16} color="#f97316" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group1">
                      <label className="label1">
                        <AtSign size={16} color="#f97316" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input"
                      />
                    </div>

                    <div className="form-group1">
                      <label className="label1">
                        <Briefcase size={16} color="#f97316" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        value={formState.company}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="form-group1">
                    <label className="label1">
                      <MessageSquare size={16} color="#f97316" />
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Describe your branding needs – logo design, brochure design, motion graphics, website branding, or complete digital branding services..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="textarea"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(249, 115, 22, 0.35)' }}
                    whileTap={{ scale: 0.98 }}
                    className="button"
                  >
                    {isSubmitting ? (
                      <>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: '#fff',
                          borderRadius: '50%',
                          animation: 'spin 0.8s linear infinite',
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Free Branding Consultation
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>

                  <p style={{ 
                    textAlign: 'center', 
                    marginTop: '1.25rem', 
                    fontSize: '0.8125rem', 
                    color: '#94a3b8',
                    lineHeight: 1.5,
                  }}>
                    By submitting this form, you agree to be contacted by <span style={{color: '#f59e0b'}}>VBLP Tech Solutions Pvt. Ltd.</span> regarding branding services in <span style={{color:"#f59e0b"}}>Hyderabad</span>.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}