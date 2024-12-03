import { PropsWithChildren, useState } from "react";
import "./collapse.css";
import arrow from "../../assets/down-arrow.png"


type CollapsePropsType = PropsWithChildren<{
  title: string;
  date: string;
}>;

const Collapse: React.FC<CollapsePropsType> = ({ date,title, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
   setIsOpen((state) => !state)
  };
  return (
    <article className={"collapse"}>
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
            isOpen? "show" : ""
          }`}
      >
        {children}
        </div>
      </article>
  )

}


export default Collapse;