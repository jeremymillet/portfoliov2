import Collapse from "../../shared/collapse/collapse"
import TechnoInfo from "../../shared/technoInfo/technoInfo"
import './experience.css'
import data from "../../data/experience.json"
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


function Experience() {
    const experienceTitleRef = useRef<HTMLDivElement | null>(null);
    const isEnglish = useSelector((state: RootState) => state.isEnglish);
    
    
    useEffect(() => {
        const handleScroll = () => {
            if (experienceTitleRef.current) {
                const expertiseRect = experienceTitleRef.current.getBoundingClientRect();
                if (expertiseRect.top < window.innerHeight && expertiseRect.bottom > 0) {
                    experienceTitleRef.current.classList.add('fade-in-up');
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
        <div id="experience">
            <h2 ref={experienceTitleRef}>Experience</h2>
            <div className="collaspes-container">
                {data.map(experience => {
                    return (
                        <Collapse date={experience.date} title={experience.title} key={experience.id}>
                            <div className="text">
                                <div className="collapse-text">
                                    <div className="localisation">
                                        <i className="fa-solid fa-location-dot icon"></i>
                                        <p>{experience.localisation}</p>
                                        <img src="" alt="" />
                                        <a href={experience.link}>OpenClassRooms</a>
                                    </div>
                                    <div className="experience-description-container">
                                        <p>{ isEnglish?experience.descriptionEng:experience.descriptionFr}</p>
                                    </div>
                                    <div className="technology-container">
                                        {experience.technology.map((techno, index) => {
                                            return (
                                                <TechnoInfo key={`${techno}-${index}`}>
                                                    <p>{techno}</p>
                                                </TechnoInfo>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="collapse-text-img">
                                    <img src={experience.picture} alt="" />
                                </div>
                            </div>
                        </Collapse>
                    );
                })}
            </div>
        </div>
    )
}

export default Experience