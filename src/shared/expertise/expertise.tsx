import { useEffect, useRef} from 'react';
import './expertise.css'


type expertiseTypeProps = {
    title: string;
    description: string;
    img: string;
    id:number;
}


const Expertise: React.FC<expertiseTypeProps> = ({ id,title, description, img }) => {
    const expertiseRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (expertiseRef.current) {
                const expertiseRect = expertiseRef.current.getBoundingClientRect();
                if (expertiseRect.top < window.innerHeight && expertiseRect.bottom > 0) {
                    if (id === 1) {
                        expertiseRef.current.classList.add('expertise-animation-1');
                    }
                    else if (id === 2) {
                        expertiseRef.current.classList.add('expertise-animation-2');
                    }

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
        <div className="expertise-container" ref={expertiseRef}>
            <div className="expertise-title-container">
                <img src={img} alt="logo" />
                <h3>{title}</h3>
            </div>
            <div className='expertise-description-container'>
                <div className='decoration-line-container'>
                    <div>{"<h3>"}</div>
                    <div className='decoration-line'></div>
                    <div>{"</h3>"}</div>
                </div>
                <p className='expertise-description'>{description}</p>
            </div>
        </div>
    )
}

export default Expertise