import { PropsWithChildren, useEffect, useRef, useState } from "react";
import "./collapse.css";
import arrow from "../../../public/assets/down-arrow.webp"


type CollapsePropsType = PropsWithChildren<{
  title: string;
  date: string;
}>;

const Collapse: React.FC<CollapsePropsType> = ({ date, title, children }) => {
  const collapseRef = useRef<HTMLDivElement | null>(null);
     useEffect(() => {
        const handleScroll = () => {
            if (collapseRef.current) {
                const expertiseRect = collapseRef.current.getBoundingClientRect();
                if (expertiseRect.top < window.innerHeight && expertiseRect.bottom > 0) {
                    collapseRef.current.classList.add('collapse-animation-1');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
   setIsOpen((state) => !state)
  };
  return (
    <article className={"collapse"} ref={collapseRef}>
        <div className="collapse-title" onClick={() => toggle()}>
          <h3>{title}</h3>
          <div className="right-part">
          <p>{date}</p>
            <span>
              <img
                className={`collapse-img ${
                  isOpen? "down" : ""
                }`}
                src={arrow}
                alt="fleche vers le bas"
              />
            </span>
          </div>
        </div>
        <div
          className={`collapse-description ${
            isOpen? "show" : "hidden"
          }`}
      >
        {children}
        </div>
      </article>
  )

}


export default Collapse;