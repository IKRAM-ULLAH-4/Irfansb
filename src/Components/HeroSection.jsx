import React from 'react';
import heroBackground from '../assets/logo.jpeg'; // Path to your background image
import '@fontsource/roboto/400.css';
import '@fontsource/poppins/600.css';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Added icon for the button

const HeroSection = () => {
  // Define the premium accent color for the button
  const CTA_COLOR_START = '#00FFC2'; // Electric Cyan/Green
  const CTA_COLOR_END = '#0080FF';  // Bright Blue

  // Button hover style (simulated for inline styles)
  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: `0 0 20px ${CTA_COLOR_START}`,
    background: `linear-gradient(to right, ${CTA_COLOR_END}, ${CTA_COLOR_START})`, // Reverse gradient on hover
  };

  const buttonStyle = {
    background: `linear-gradient(to right, ${CTA_COLOR_START}, ${CTA_COLOR_END})`,
    border: 'none',
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.4s ease-in-out',
    letterSpacing: '1.5px', // Increased letter spacing
    fontSize: '1.3rem', // Slightly larger font
    padding: '16px 40px', // More padding
    fontWeight: '700', // Made button text bolder
    textTransform: 'uppercase', // Added uppercase for prominence
    zIndex: 10,
    position: 'relative',
    borderRadius: '50px',
  };

  return (
    <section
      id="home"
      className="hero-section text-white py-5 d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Added fixed attachment for parallax effect
        backgroundPosition: 'center center',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Darker Gradient Overlay for better contrast */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))', // Gradient dark overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container position-relative z-index-2 text-center"
        style={{ zIndex: 2 }}
      >
        <div className="pt-5 pb-5"> {/* Added padding for vertical centering/spacing */}
        
          {/* Heading with maximum impact */}
          <h1
            className="display-1 mb-4 fw-bolder animate__animated animate__fadeIn animate__delay-1s"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '5.5rem', // Even larger size
              textShadow: '3px 3px 6px rgba(0, 0, 0, 1)', // Stronger text shadow
              lineHeight: '1.1',
              textTransform: 'uppercase',
            }}
          >
            Launch Your Crypto Authority
          </h1>

          {/* Subheading: More punchy and specific */}
          <p
            className="lead mb-5 animate__animated animate__fadeIn animate__delay-2s"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.75rem',
              fontWeight: '400',
              maxWidth: '850px',
              margin: '0 auto',
              lineHeight: '1.5',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              color: '#F0F0F0', // Slightly brighter text
            }}
          >
            We connect your project with a 140,000+ verified crypto community. Achieve explosive growth with expert-led promotion on Twitter, Telegram, and Binance Live.
          </p>

          {/* Call to Action Button */}
          <a
            href="#start"
            className="btn btn-lg rounded-pill fw-semibold animate__animated animate__zoomIn animate__delay-3s"
            style={buttonStyle}
            // Add interactive hover effects (requires onMouseOver/onMouseOut in React)
            onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
          >
            Secure Your Launch Slot <FaExternalLinkAlt className="ms-2" size={14} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;