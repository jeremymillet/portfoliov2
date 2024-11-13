import { useState } from "react"
import GradientBackground from "../../components/background/background"
import Cursor from "../../components/cursor/cursor"
import Header from "../../components/header/header"
import Mouse from "../../components/mouse/mouse"
import './home.css'
import ExpertiseComponant from "../../components/expertise/expertise"
import Work from "../../components/work/work"


function Home() {
    const [isFixed, setIsFixed] = useState<boolean>(false);
    
    return (
        <div>
            <Cursor />
            <Header setIsFixed={setIsFixed} isFixed={isFixed} />
            <GradientBackground isFixed={isFixed}/>
            <div className="hero">
                <h1>Jérémy MILLET</h1>
                <h2 className="subtitle">Concepteur développeur d'application web.</h2>
            </div>
            <Mouse/>
            <div className={`background-overlay ${isFixed ? 'fixed' : ''}`}></div>
            <ExpertiseComponant />
            <Work/>
        </div>
    );
}

export default Home