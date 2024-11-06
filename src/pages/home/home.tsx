import GradientBackground from "../../components/background/background"
import Cursor from "../../components/cursor/cursor"
import Header from "../../components/header/header"
import Mouse from "../../components/mouse/mouse"
import './home.css'


function Home() {
    return (
        <div>
            <Cursor />
            <div>
                <Header />
                <GradientBackground />
                <div className="hero">
                    <h1>Jérémy MILLET</h1>
                    <h2>Concepteur développeur d'application web.</h2>
                </div>
                <Mouse/>
            </div>
        </div>
    )
}
export default Home