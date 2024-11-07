import { useEffect } from 'react';
import './background.css'

const GradientBackground = ({ isFixed }: { isFixed: boolean }) => {
    useEffect(() => {
    const interBubble = document.querySelector('.interactive') as HTMLElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 15;  // Diminuez la valeur pour un mouvement plus fluide
      curY += (tgY - curY) / 15;  
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`; // Utilisation de 'style' après le cast
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event:MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className={`gradient-bg ${isFixed ? 'fixed' : ''}`}>
      <svg
        viewBox="0 0 100vw 100vw"
        xmlns="http://www.w3.org/2000/svg"
        className="noiseBg"
      >
        <filter id="noiseFilterBg">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          filter="url(#noiseFilterBg)"
        />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};

export default GradientBackground;