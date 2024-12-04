import { useState } from "react"
import GradientBackground from "../../components/background/background"
import Header from "../../components/header/header"
import Mouse from "../../shared/mouse/mouse"
import './home.css'
import ExpertiseComponant from "../../components/expertise/expertise"
import Work from "../../components/work/work"
import Experience from "../../components/experience/experience"
import Contact from "../../components/contact/contact"


function Home() {
    const [isFixed, setIsFixed] = useState<boolean>(false);
    
    return (
        <div>
            
            <Header setIsFixed={setIsFixed} isFixed={isFixed} />
            <GradientBackground isFixed={isFixed}/>
            <div className="hero">
                <h1>Jérémy MILLET</h1>
                <h2 className="subtitle">Concepteur développeur d'application web.</h2>
            </div>
            <div className="mouse-container">
                <Mouse/>
            </div>
            <div className={`background-overlay ${isFixed ? 'fixed' : ''}`}></div>
            <ExpertiseComponant />
            <Work />
            <Experience />
            <Contact/>
        </div>
    );
}

export default Home