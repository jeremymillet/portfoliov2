import { Dispatch, SetStateAction, useEffect} from 'react';
import './header.css'

type HeaderProps = {
  setIsFixed: Dispatch<SetStateAction<boolean>>;
  isFixed: boolean;
};

function Header({ setIsFixed, isFixed }: HeaderProps) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsFixed]);

  return (
    <header className={`${isFixed ? 'fixed' : ''}`}>
      <div className="logo">
        <p>JérémyMillet</p>
        <span>.</span>
        <span className="logo-purple">_</span>
      </div>
      <nav className="nav">
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
              <span>// experience</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header 