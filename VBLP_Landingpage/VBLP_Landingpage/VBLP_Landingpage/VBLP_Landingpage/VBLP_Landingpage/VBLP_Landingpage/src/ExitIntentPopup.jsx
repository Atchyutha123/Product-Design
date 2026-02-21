import React, { useState, useEffect } from 'react';
import { X, User, Mail, Phone, MessageSquare, Send, Sparkles, CheckCircle, Clock } from 'lucide-react';

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds timer

  // Check if already shown in this session
  useEffect(() => {
    const hasShownBefore = sessionStorage.getItem('popupShown');
    if (hasShownBefore) {
      setHasShown(true);
    }
  }, []);

  // Countdown timer - runs every second
  useEffect(() => {
    if (hasShown) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasShown]);

  // Show popup when timer reaches 0
  useEffect(() => {
    if (hasShown || timeLeft > 0) return;

    setShowPopup(true);
    sessionStorage.setItem('popupShown', 'true');
    setHasShown(true);
  }, [timeLeft, hasShown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: onlyNums });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Close after showing success
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Don't render if already shown
  if (hasShown && !showPopup) return null;

  return (
    <>
      {/* Floating Timer Badge (shows before popup appears) */}
      {!hasShown && timeLeft > 0 && (
        <div className="floating-timer">
          <Clock size={14} />
          <span>Special offer in {timeLeft}s</span>
        </div>
      )}

      {/* Main Popup Overlay */}
      {showPopup && (
        <div className={`popup-overlay ${showPopup ? 'active' : ''}`} onClick={closePopup}>
          <div className={`popup-container ${showPopup ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="popup-close" onClick={closePopup}>
              <X size={20} />
            </button>

            {/* Success State */}
            {isSuccess ? (
              <div className="success-state">
                <div className="success-icon">
                  <CheckCircle size={60} />
                </div>
                <h3>Thank You!</h3>
                <p>We've received your message. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                {/* Left Side - Offer Info */}
                <div className="popup-offer">
                  <div className="offer-badge">
                    <Sparkles size={16} />
                    <span>Limited Time Offer</span>
                  </div>
                  
                  <h2>Get Free Consultation</h2>
                  <p className="offer-text">
                    Transform your business with our expert solutions. 
                    Book a free 30-minute strategy session worth 
                    <span className="strike-price"> ₹5,000</span> 
                    <span className="free-price"> FREE</span>
                  </p>

                  <div className="offer-benefits">
                    <div className="benefit-item">
                      <CheckCircle size={18} />
                      <span>Personalized Strategy</span>
                    </div>
                    <div className="benefit-item">
                      <CheckCircle size={18} />
                      <span>Expert Analysis</span>
                    </div>
                    <div className="benefit-item">
                      <CheckCircle size={18} />
                      <span>No Obligation Quote</span>
                    </div>
                  </div>

                  <div className="urgency-bar">
                    <div className="urgency-text">🔥 Only 3 slots left for today</div>
                    <div className="progress-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot empty"></span>
                      <span className="dot empty"></span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="popup-form-section">
                  <div className="form-header">
                    <h3>Claim Your Free Session</h3>
                    <p>Fill in your details below</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="input-wrapper">
                        <User size={18} className="input-icon" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-wrapper">
                        <Mail size={18} className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Business Email *"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-wrapper">
                        <Phone size={18} className="input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number *"
                          minLength={10}
                          maxLength={10}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-wrapper textarea-wrapper">
                        <MessageSquare size={18} className="input-icon" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project goals..."
                          rows="3"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Consultation</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    <p className="privacy-text">
                      🔒 Your information is secure. We never share your data.
                    </p>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* Floating Timer Badge */
        .floating-timer {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: linear-gradient(135deg, #f59e0b, #f97316);
          color: white;
          padding: 12px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
          z-index: 9998;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Popup Overlay */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .popup-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Popup Container */
        .popup-container {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          transform: scale(0.9) translateY(30px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
        }

        .popup-overlay.active .popup-container {
          transform: scale(1) translateY(0);
          opacity: 1;
        }

        /* Close Button */
        .popup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
          color: #64748b;
        }

        .popup-close:hover {
          background: #fee2e2;
          color: #dc2626;
          transform: rotate(90deg);
        }

        /* Left Side - Offer */
        .popup-offer {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 50px 40px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .popup-offer::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .offer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 25px;
          width: fit-content;
          position: relative;
          z-index: 1;
        }

        .popup-offer h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
          position: relative;
          z-index: 1;
        }

        .offer-text {
          font-size: 16px;
          line-height: 1.7;
          opacity: 0.95;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .strike-price {
          text-decoration: line-through;
          opacity: 0.7;
          margin-right: 8px;
        }

        .free-price {
          font-weight: 700;
          font-size: 1.2em;
          color: #fbbf24;
        }

        .offer-benefits {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
        }

        .benefit-item svg {
          color: #34d399;
        }

        .urgency-bar {
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          padding: 15px 20px;
          position: relative;
          z-index: 1;
        }

        .urgency-text {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #fbbf24;
        }

        .progress-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
        }

        .dot.filled {
          background: #fbbf24;
          animation: pulse-dot 1.5s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Right Side - Form */
        .popup-form-section {
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #ffffff;
        }

        .form-header {
          margin-bottom: 25px;
        }

        .form-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .form-header p {
          color: #64748b;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          color: #9ca3af;
          transition: color 0.3s;
        }

        .input-wrapper input,
        .input-wrapper textarea {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s;
          background: #f9fafb;
          color: #1e293b;
        }

        .input-wrapper textarea {
          padding-top: 14px;
          resize: none;
          min-height: 80px;
        }

        .input-wrapper input:focus,
        .input-wrapper textarea:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .input-wrapper:focus-within .input-icon {
          color: #667eea;
        }

        .input-wrapper input::placeholder,
        .input-wrapper textarea::placeholder {
          color: #9ca3af;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s;
          margin-top: 10px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
        }

        .submit-btn.loading {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .privacy-text {
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
          margin-top: 15px;
        }

        /* Success State */
        .success-state {
          grid-column: 1 / -1;
          padding: 60px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .success-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #10b981, #34d399);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 25px;
          animation: scale-in 0.5s ease;
        }

        @keyframes scale-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .success-state h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
        }

        .success-state p {
          color: #64748b;
          font-size: 16px;
          max-width: 400px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .popup-container {
            grid-template-columns: 1fr;
            max-height: 95vh;
          }

          .popup-offer {
            display: none;
          }

          .popup-form-section {
            padding: 40px 30px;
          }

          .floating-timer {
            bottom: 20px;
            right: 20px;
            padding: 10px 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default ExitIntentPopup;