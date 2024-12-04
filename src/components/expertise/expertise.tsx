import Expertise from "../../shared/expertise/expertise"
import reactLogo from "./../../assets/react.svg"
import backendLogo from "./../../assets/database.svg"
import { useEffect, useRef } from "react";
import './expertise.css'

function ExpertiseComponant() {
    const expertiseTitleRef = useRef<HTMLDivElement | null>(null);
    
    
    useEffect(() => {
        const handleScroll = () => {
            if (expertiseTitleRef.current) {
                const expertiseRect = expertiseTitleRef.current.getBoundingClientRect();
                if (expertiseRect.top < window.innerHeight && expertiseRect.bottom > 0) {
                    expertiseTitleRef.current.classList.add('fade-in-up');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="expertise">
                <h2 ref={expertiseTitleRef}>My Expertise</h2>
                <div className="expertises-container ">
                <Expertise
                        title={"Frontend dev React,Vue"}
                        description="Passionate about dev over 3 years of development experience in SCSS, JS, REACT, VUE frameworks"
                        img={reactLogo}
                    />
                <Expertise
                        title={"Backend Dev node,express"}
                        description={"Skilled in backend create api and database with MySQL,mongoose,express.js frameworks"}
                        img={backendLogo}
                    />
                </div>
            </div>
    )
}

export default ExpertiseComponant