import './header.css'

function Header() {
    return (
        <header>
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