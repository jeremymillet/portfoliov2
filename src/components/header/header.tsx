import { Dispatch, SetStateAction, useEffect, useState} from 'react';
import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setEnglish } from '../../store';
import flagUk from '../../../public/assets/flag-uk.svg'
import flagFr from '../../../public/assets/flag-fr.svg'
import { Link } from 'react-router-dom';


type HeaderProps = {
  setIsFixed: Dispatch<SetStateAction<boolean>>;
  isFixed: boolean;
};

function Header({ setIsFixed, isFixed }: HeaderProps) {
  const dispatch = useDispatch<AppDispatch>();
  const isEnglish = useSelector((state: RootState) => state.isEnglish);
  const [isBurger,setIsBurger] = useState(false)
  function toogle() {
    setIsBurger(!isBurger)
  }
  function toggleLanguage() {
    dispatch(setEnglish(!isEnglish))
  }
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
    <header className={`${isFixed ? 'fixed' : ''} ${isBurger? "header-burger": ""}`}>
      <div className='burger'>
        <i className={`${isBurger? '' :"visible"}open-burger-btn fa-solid fa-bars`}onClick={toogle}></i>
        <div className={`${isBurger ? 'visible' : 'hidden'} menu-burger`}>
          <i className="fa-solid fa-xmark fa-lg menu-burger-close" onClick={toogle}></i>
          <nav className="burger-nav">
            <ul>
              <li>
                <Link to="/#" >
                  <span>{isEnglish?"// home" : "// accueil"  }</span>
                </Link>
              </li>
              <li>
                <Link to="/#expertise">
                  <span>// expertise</span>
                </Link>
              </li>
              <li>
                <Link to="/#work">
                  <span>{isEnglish?"// work" : "// projet"  }</span>
                </Link>
              </li>
              <li>
                <Link to="/#experience">
                  <span>{isEnglish?"// experience" : "// expérience"  }</span>
                </Link>
              </li>
            </ul>
            <img onClick={toggleLanguage} className='language-status' src={isEnglish?flagFr:flagUk} alt="flag" />
          </nav>
        </div>
      </div>
      <Link to="/#" >
        <div className="logo">
        <p>JérémyMillet</p>
        <span>.</span>
        <span className="logo-purple">_</span>
      </div>
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">
              <p>01</p>
              <span>{isEnglish?"// home" : "// accueil"  }</span>
            </a>
          </li>
          <li>
            <a href="/#expertise">
              <p>02</p>
              <span>// expertise</span>
            </a>
          </li>
          <li>
            <a href="/#work">
              <p>03</p>
              <span>{isEnglish?"// work" : "// projet"  }</span>
            </a>
          </li>
          <li>
            <a href="/#experience">
              <p>04</p>
              <span>{isEnglish?"// experience" : "// expérience"  }</span>
            </a>
          </li>
        </ul>
        <img onClick={toggleLanguage} className='language-status' src={isEnglish?flagFr:flagUk} alt="flag" />
      </nav>
    </header>
  );
}
export default Header 