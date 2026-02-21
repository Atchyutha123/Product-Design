import React from 'react';
import { motion } from 'framer-motion';

const images = {
  discovery: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
  design: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
  dev: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
  launch: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  center: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
};

const ResonanceStudio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, opacity: 1, 
      transition: { type: "spring", stiffness: 70, damping: 15 } 
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, opacity: 0.4, 
      transition: { duration: 2, ease: "easeInOut", delay: 0.8 } 
    }
  };

  // Shared Hover Transition Config
  const cardHoverAction = {
    backgroundColor: "#FFD700",
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <div className="process-wrapper">
      <div className="process-container">
        
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="tag">How IT Works</span>
          <h2>Step By Step Working Process</h2>
        </motion.div>

        <motion.div 
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* SVG Zig-Zag Line */}
          <svg className="connector-svg" viewBox="0 0 1200 500" preserveAspectRatio="none">
            <motion.path
              d="M 150 220 L 300 280 L 450 220 L 600 280 L 750 220 L 900 280 L 1050 220"
              fill="transparent"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              variants={lineVariants}
            />
          </svg>

          {/* ROW 1 */}
          <StepCard variants={itemVariants} type="image" src={images.discovery} dotPos="bottom" />
          <StepCard variants={itemVariants} type="text" title="Design and Prototyping" desc="We begin by understanding your brand, goals, and target audience competitive" dotPos="bottom" hoverAction={cardHoverAction} />
          <StepCard variants={itemVariants} type="image" src={images.design} dotPos="bottom" />
          {/* NOW NORMAL INITIALLY: The Launch card now follows hover rules */}
          <StepCard variants={itemVariants} type="text" title="Launch and Support" desc="We begin by understanding your brand, goals, and target audience competitive" dotPos="bottom" hoverAction={cardHoverAction} />

          {/* ROW 2 */}
          <StepCard variants={itemVariants} type="text" title="Discovery and Strategy" desc="We begin by understanding your brand, goals, and target audience competitive" dotPos="top" hoverAction={cardHoverAction} />
          <StepCard variants={itemVariants} type="image" src={images.center} dotPos="top" />
          <StepCard variants={itemVariants} type="text" title="Development and Testing" desc="We begin by understanding your brand, goals, and target audience competitive" dotPos="top" hoverAction={cardHoverAction} />
          <StepCard variants={itemVariants} type="image" src={images.launch} dotPos="top" />
        </motion.div>
      </div>

      <style>{`
        :root {
          --bg-color: #0a0a0a;
          --card-bg: #111;
          --accent-yellow: #FFD700;
        }

        .process-wrapper {
          background-color: var(--bg-color);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 20px;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .process-container { max-width: 1200px; width: 100%; position: relative; }
        .process-header { text-align: center; margin-bottom: 80px; color: white; }
        .tag { border: 1px solid #333; padding: 6px 18px; border-radius: 20px; font-size: 13px; text-transform: uppercase; }
        .process-header h2 { font-size: 3rem; margin-top: 20px; font-weight: 700; }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 45px 25px;
          position: relative;
        }

        .connector-svg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .step-node { position: relative; z-index: 1; }
        
        .card {
          border-radius: 12px;
          height: 220px;
          background: var(--card-bg);
          border: 1px solid #222;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
        }

        .image-card { padding: 0; overflow: hidden; }
        .image-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .step-node:hover .image-card img { transform: scale(1.1); }

        .text-card h3 { color: white; margin-bottom: 12px; font-size: 1.25rem; transition: color 0.3s ease; }
        .text-card p { color: #888; font-size: 0.85rem; line-height: 1.5; transition: color 0.3s ease; }

        /* Dot Styling */
        .dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          background: #000;
          border: 2px solid white;
          border-radius: 50%;
          z-index: 5;
          transition: all 0.3s ease;
        }
        .dot::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 4px; height: 4px;
          background: white;
          border-radius: 50%;
        }

        .dot-bottom { bottom: -30px; }
        .dot-top { top: -30px; }

        /* HOVER INTERACTIONS */
        .step-node:hover .card {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.15);
        }
        
        /* Ensure text turns black on hover */
        .step-node:hover h3, .step-node:hover p { color: #000 !important; }

        .step-node:hover .dot {
          background: var(--accent-yellow);
          border-color: var(--accent-yellow);
          transform: translateX(-50%) scale(1.3);
          box-shadow: 0 0 15px var(--accent-yellow);
        }
        .step-node:hover .dot::after { background: #000; }

        @media (max-width: 767px) {
  .process-wrapper {
    padding: 60px 16px;
  }

  .process-header h2 {
    font-size: 2rem;
  }

  .process-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .card {
    height: auto;
    padding: 20px;
  }

  .image-card {
    height: 200px;
  }

  .dot-top,
  .dot-bottom {
    display: none;
  }

  .connector-svg {
    display: none;
  }
}
        @media (min-width: 768px) and (max-width: 1023px) {
  .process-wrapper {
    padding: 70px 24px;
  }

  .process-header h2 {
    font-size: 2.5rem;
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 30px;
  }

  .card {
    height: 220px;
  }

  .image-card {
    height: 220px;
  }

  .connector-svg {
    display: none;
  }
}
        @media (min-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .connector-svg {
    display: block;
  }
}

      `}</style>
    </div>
  );
};

const StepCard = ({ type, src, title, desc, dotPos, variants, hoverAction }) => (
  <motion.div className="step-node" variants={variants}>
    <motion.div 
      className={`card ${type}-card`}
      whileHover={hoverAction}
    >
      {type === 'image' ? (
        <img src={src} alt="Process Step" />
      ) : (
        <>
          <h3>{title}</h3>
          <p>{desc}</p>
        </>
      )}
    </motion.div>
    <div className={`dot dot-${dotPos}`}></div>
  </motion.div>
);

export default ResonanceStudio;