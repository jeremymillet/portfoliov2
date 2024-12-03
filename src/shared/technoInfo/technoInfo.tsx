import { ReactNode } from "react";
import './technoInfo.css'

type TechnoInfoPropsType = {
    children: ReactNode;
};

const TechnoInfo = ({ children }: TechnoInfoPropsType) => {
    return (
        <div className="techno-info">
            {children}
        </div>
    );
};

export default TechnoInfo;