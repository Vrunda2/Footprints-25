import React, { useEffect, useRef } from "react";

const VideoBox = ({ url }) => {
  const containerRef = useRef(null);
  const eventName = url.split('/').pop().split('.')[0].toUpperCase();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = ''; // Clear previous content
    
    // Create letter elements
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

    function animateText() {
      const letterContainers = container.querySelectorAll('.letter-container');
      let currentIndex = 0;

      letterContainers.forEach(container => {
        container.style.opacity = '1';
        const base = container.querySelector('.text-base');
        const glow = container.querySelector('.text-glow');
        const outline = container.querySelector('.letter-outline');
        
        base.style.opacity = '0.3';
        glow.style.opacity = '0';
        outline.style.strokeDashoffset = '1000';
      });

      function animateNextLetter() {
        if (currentIndex < letterContainers.length) {
          const container = letterContainers[currentIndex];
          const base = container.querySelector('.text-base');
          const glow = container.querySelector('.text-glow');
          const outline = container.querySelector('.letter-outline');
          
          const bbox = base.getBoundingClientRect();
          const path = `M ${bbox.left} ${bbox.top} 
                       L ${bbox.right} ${bbox.top} 
                       L ${bbox.right} ${bbox.bottom}
                       L ${bbox.left} ${bbox.bottom}
                       L ${bbox.left} ${bbox.top}`;
          
          outline.setAttribute('d', path);
          outline.style.animation = 'tracePath 0.5s forwards';
          base.style.animation = 'fadeInText 0.5s forwards';
          glow.style.animation = 'fadeInGlow 0.5s forwards';
          
          currentIndex++;
          setTimeout(animateNextLetter, 500);
        } else {
          setTimeout(() => {
            letterContainers.forEach(container => {
              const base = container.querySelector('.text-base');
              const glow = container.querySelector('.text-glow');
              const outline = container.querySelector('.letter-outline');
              
              base.style.animation = '';
              glow.style.animation = '';
              outline.style.animation = '';
            });
            setTimeout(animateText, 1000);
          }, 2000);
        }
      }

      animateNextLetter();
    }

    setTimeout(animateText, 500);

    // Cleanup function
    return () => {
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
      background: 'transparent'
    }}>
      <div ref={containerRef} className="text-container" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

        .text-container {
          position: relative;
          display: flex;
        }

        .letter-container {
          position: relative;
          margin: 0 4px;
          opacity: 0;
          transition: opacity 0.3s;
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
        }

        .text-base {
          font-size: 8rem;
          font-weight: 700;
          color: #fff;
          opacity: 0.3;
          position: relative;
          z-index: 1;
          font-family: 'Orbitron', 'Courier New', monospace;
        }

        .text-glow {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 8rem;
          font-weight: 700;
          color: transparent;
          background: linear-gradient(45deg, #00ffff, #00ccff, #0099ff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          filter: blur(15px) brightness(1.5);
          animation: gradientMove 3s ease infinite;
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
          to {
            opacity: 0.5;
          }
        }

        @keyframes fadeInText {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoBox;
