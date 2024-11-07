import { useEffect } from 'react';
import paper from 'paper';
import './cursor.css';

const Cursor: React.FC = () => {
  useEffect(() => {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".cursor--small") as HTMLDivElement | null;

    if (!innerCursor) return;

    // Suivi de la position de la souris
    const mouseMoveHandler = (e: MouseEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    // Animation de la position du curseur
    const render = () => {
      if (innerCursor) {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // Écoute des événements de survol des liens pour un effet de hover
    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          innerCursor.classList.add("cursor--hover");
        });
        link.addEventListener("mouseleave", () => {
          innerCursor.classList.remove("cursor--hover");
        });
      });
    };
    handleLinkHoverEvents();

    // Fonction pour initialiser le curseur animé avec `paper.js`
    const initPaperCursor = () => {
      const strokeColor = new paper.Color("#66d9ed");
      const strokeWidth = 1;
      const segments = 8;
      const radius = 20;

      const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();
      const group = new paper.Group([polygon]);
      group.applyMatrix = false;

      let lastX = 0;
      let lastY = 0;
      const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

      // Animation de `paper.js` pour suivre la souris
      paper.view.onFrame = () => {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      };
    };

    // Redimensionnement du canvas et réinitialisation du curseur `paper.js`
    const resizeCanvas = () => {
      const canvas = document.querySelector(".cursor--canvas") as HTMLCanvasElement | null;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        paper.setup(canvas);
        initPaperCursor();
      }
    };

    // Initialisation du canvas et écoute des redimensionnements
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Nettoyage des écouteurs d'événements
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div>
      <div className="cursor cursor--small"></div>
      <canvas className="cursor cursor--canvas"></canvas>
    </div>
  );
};

export default Cursor;