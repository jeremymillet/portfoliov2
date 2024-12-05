import { useEffect, useRef } from 'react';
import './card.css'

type cardPropsType = {
    title: string,
    category: string,
    id: number
    cover : string,
}


const Card: React.FC<cardPropsType> = ({ cover, title, category, id }) => {

    const cardRef = useRef<HTMLDivElement | null>(null);
     useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const expertiseRect = cardRef.current.getBoundingClientRect();
                if (expertiseRect.top < window.innerHeight && expertiseRect.bottom > 0) {
                    cardRef.current.classList.add('card-animation-1');
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
        <a className='card-link' href={`project/${id}`}>
            <div className="card" ref={cardRef}>
            <div className="card-img-container">
                <img src={cover} alt="" />
            </div>
            <div className="card-text-container">
                <h3>{title}</h3>
                <p>{category}</p>
                <a className='card-link' href={`project/${id}`}>
                    Show Project 
                </a>
            </div>
        </div>
        </a>
        
    )
}
export default Card