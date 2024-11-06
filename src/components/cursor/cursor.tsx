import { useEffect } from 'react';
import paper from 'paper';
import './cursor.css'
function Cursor() {
    useEffect(() => {
    // Initialisation du curseur
    let clientX = 100;
    let clientY = 100;
    const innerCursor = document.querySelector(".cursor--small");

    // Suivi de la position de la souris
    document.addEventListener("mousemove", (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    // Mise à jour de la position du curseur
    const render = () => {
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // Ajouter des écouteurs pour les événements de survol des liens
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

    // Initialisation de Paper.js pour l'animation du curseur avec canvas
    let lastX = 0;
    let lastY = 0;
    let group;

    const initCanvas = () => {
      const canvas = document.querySelector(".cursor--canvas");
      paper.setup(canvas);

      const strokeColor = "#66d9ed";
      const strokeWidth = 1;
      const segments = 8;
      const radius = 20;
      const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();
      group = new paper.Group([polygon]);
      group.applyMatrix = false;

      const lerp = (a, b, n) => (1 - n) * a + n * b;
      paper.view.onFrame = () => {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      };
    };

    initCanvas();

    // Nettoyage des événements
    return () => {
      document.removeEventListener("mousemove", () => {});
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

    return (
        <div>
            <div className="cursor cursor--small"></div>
            <canvas className="cursor cursor--canvas"></canvas>
        </div>
    )
}
export default Cursor