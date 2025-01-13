import React, { useEffect, useRef } from "react";

const VideoBox = ({ url }) => {
  const containerRef = useRef(null);
  const eventName = url.toUpperCase();
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    eventName.split('').forEach((letter) => {
      const letterContainer = document.createElement('div');
      letterContainer.className = 'letter-container';
      
      const base = document.createElement('div');
      base.className = 'text-base';
      base.textContent = letter;
      
      const glow = document.createElement('div');
      glow.className = 'text-glow';
      glow.textContent = letter;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.position = "absolute";
      svg.style.top = "0";
      svg.style.left = "0";
      
      const textPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      textPath.classList.add('letter-outline');
      
      svg.appendChild(textPath);
      letterContainer.appendChild(svg);
      letterContainer.appendChild(base);
      letterContainer.appendChild(glow);
      container.appendChild(letterContainer);
    });

    function resetLetters() {
      const letterContainers = container.querySelectorAll('.letter-container');
      letterContainers.forEach(container => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(20px)';
        const base = container.querySelector('.text-base');
        const glow = container.querySelector('.text-glow');
        const outline = container.querySelector('.letter-outline');
        
        base.style.opacity = '0';
        glow.style.opacity = '0';
        outline.style.strokeDashoffset = '1000';
        
        base.style.animation = 'none';
        glow.style.animation = 'none';
        outline.style.animation = 'none';
        
        void container.offsetWidth;
      });
    }

    function animateText() {
      const letterContainers = container.querySelectorAll('.letter-container');
      let currentIndex = 0;

      resetLetters();

      function animateNextLetter() {
        if (currentIndex < letterContainers.length) {
          const container = letterContainers[currentIndex];
          const base = container.querySelector('.text-base');
          const glow = container.querySelector('.text-glow');
          const outline = container.querySelector('.letter-outline');
          
          container.style.transform = 'translateY(0)';
          container.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
          
          const bbox = base.getBoundingClientRect();
          const path = `M ${bbox.left} ${bbox.top} 
                       L ${bbox.right} ${bbox.top} 
                       L ${bbox.right} ${bbox.bottom}
                       L ${bbox.left} ${bbox.bottom}
                       L ${bbox.left} ${bbox.top}`;
          
          outline.setAttribute('d', path);
          outline.style.animation = 'tracePath 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
          base.style.animation = 'fadeInText 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
          glow.style.animation = 'fadeInGlow 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards, pulseGlow 2s infinite';
          
          currentIndex++;
          animationRef.current = setTimeout(animateNextLetter, 300);
        } else {
          animationRef.current = setTimeout(() => {
            resetLetters();
            animationRef.current = setTimeout(animateText, 2000);
          }, 4000);
        }
      }

      animateNextLetter();
    }

    animationRef.current = setTimeout(animateText, 500);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      container.innerHTML = '';
    };
  }, [eventName]);

  return (
    <div className="video_main" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      fontFamily: "'Orbitron', 'Courier New', 'monospace'",
      background: 'transparent',
      perspective: '1000px'
    }}>
      <div ref={containerRef} className="text-container" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

        .text-container {
          position: relative;
          display: flex;
          transform-style: preserve-3d;
        }

        .letter-container {
          position: relative;
          margin: 0 4px;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .letter-outline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          fill: none;
          stroke: #0ff;
          stroke-width: 2;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          z-index: 2;
          filter: drop-shadow(0 0 5px #0ff);
        }

        .text-base {
          font-size: 8rem;
          font-weight: 700;
          color: #fff;
          opacity: 0;
          position: relative;
          z-index: 1;
          font-family: 'Orbitron', 'Courier New', monospace;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .text-glow {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 8rem;
          font-weight: 700;
          color: transparent;
          background: linear-gradient(45deg, #00ffff, #00ccff, #0099ff, #00ffff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          filter: blur(15px) brightness(1.5);
          opacity: 0;
          letter-spacing: 2px;
          font-family: 'Orbitron', 'Courier New', monospace;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes tracePath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInGlow {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
        }

        @keyframes pulseGlow {
          0% {
            filter: blur(15px) brightness(1.5);
          }
          50% {
            filter: blur(20px) brightness(2);
          }
          100% {
            filter: blur(15px) brightness(1.5);
          }
        }

        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: scale(0.95) translateZ(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateZ(0);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoBox;