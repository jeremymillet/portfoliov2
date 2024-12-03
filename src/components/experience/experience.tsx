import Collapse from "../../shared/collapse/collapse"
import TechnoInfo from "../../shared/technoInfo/technoInfo"
import './experience.css'
import data from "../../data/experience.json"


function Experience() {
    return (
        <div id="experience">
            <h2>Experience</h2>
            <div className="collaspes-container">
                {data.map(experience => {
                    return (
                        <Collapse date={experience.date} title={experience.title} key={experience.id}>
                            <div className="text">
                                <div className="localisation">
                                    <i className="fa-solid fa-location-dot icon"></i>
                                    <p>{experience.localisation}</p>
                                </div>
                                <p>{experience.description}</p>
                                <div className="technology-container">
                                    {experience.technology.map(techno => {
                                        return (
                                            <TechnoInfo key={techno}>
                                                <p>{techno}</p>
                                            </TechnoInfo>
                                        );
                                    })}
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