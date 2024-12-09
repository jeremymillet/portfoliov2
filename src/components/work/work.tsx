import Card from "../../shared/card/card"
import data from "../../data/works.json"
import { useEffect, useRef } from "react";
import './work.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Work() {
    const workRef = useRef<HTMLDivElement | null>(null);
    const isEnglish = useSelector((state: RootState) => state.isEnglish);


     useEffect(() => {
        const handleScroll = () => {
            if (workRef.current) {
                const workRect = workRef.current.getBoundingClientRect();
                if (workRect.top < window.innerHeight && workRect.bottom > 0) {
                    workRef.current.classList.add('fade-in-up');
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
        <div id="work">
            <h2 ref={workRef}>{isEnglish?"My Work":"Mes Projets"}</h2>
            <div className="card-container">
                {data.map((e) => {
                    return (
                        <Card cover={e.cover} title={e.title} category={e.category} id={e.id} key={e.id}  />
                    )
                })}
            </div>
        </div>
    )
}
export default Work