import { useEffect, useState } from 'react';
import './header.css'

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.5) {  // 50% de la hauteur de la fenêtre
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
        };
    window.addEventListener('scroll', handleScroll);
    // Nettoyage de l'événement au démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <header className={`${isFixed ? 'fixed' : ''}`}>
            <div className='logo'>
                <p>JérémyMillet</p>
                <span>.</span>
                <span className='logo-purple'>_</span>
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        <a href="#">
                            <p>01</p>
                            <span>// home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#expertise">
                            <p>02</p>
                            <span>// expertise</span>
                        </a>
                    </li>
                    <li>
                        <a href="#work">
                            <p>03</p>
                            <span>// work</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <p>04</p>
                            <span>// experiance</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header 