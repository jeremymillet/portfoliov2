import Expertise from "../../shared/expertise/expertise"
import reactLogo from "../../../public/assets/react.svg"
import backendLogo from "../../../public/assets/database.svg"
import { useEffect, useRef } from "react";
import './expertise.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function ExpertiseComponant() {
    const expertiseTitleRef = useRef<HTMLDivElement | null>(null);
    const isEnglish = useSelector((state: RootState) => state.isEnglish);
    
    
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
            <h2 ref={expertiseTitleRef}>{isEnglish?"My Expertise":"Mon expertise"}</h2>
                <div className="expertises-container ">
                <Expertise
                        title={"Frontend dev React,Vue"}
                    description={isEnglish ? "Passionate about dev over 3 years of development experience in SCSS, JS, REACT, VUE frameworks"
                        : "Passionné de développement avec 3 ans d'expérience en SCSS, JS, REST, VUE frameworks"}
                        img={reactLogo}
                    />
                <Expertise
                        title={"Backend Dev node,express"}
                        description={isEnglish ? "Skilled in backend create api and database with MySQL,mongoose,express.js frameworks"
                        : "Expertise backend création d'API et de bases de données avec MySQL, Moongoose, Express.js frameworks"}
                        img={backendLogo}
                    />
                </div>
            </div>
    )
}

export default ExpertiseComponant