import { useEffect, useState } from 'react';
import './project.css'
import Header from '../../components/header/header';
import { useNavigate, useParams } from 'react-router-dom';
import projects from '../../data/works.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Project() {
    const isEnglish = useSelector((state: RootState) => state.isEnglish);
    const paramsId = useParams<{ id: string }>();
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const navigate = useNavigate();
    const currentProject = projects.find((project) => project.id === Number(paramsId.id));
    useEffect(() => {
        if (!currentProject) {
        navigate("/");
        }
    },[]);
    return (
        <div>
            <Header setIsFixed={setIsFixed} isFixed={isFixed} />
            <div className='project-title-container'>
                <h2 className='project-subtitle'>{currentProject?.category}.</h2>
                <h1 className='project-title'>{currentProject?.title}</h1>
            </div>
            <div className='project-description-part-container'>
                <div className='project-description-container'>
                    <p>{isEnglish?currentProject?.descriptionEng:currentProject?.descriptionFr}</p>
                </div>
                <div className='project-technologies-link-part'>
                    <div className='project-technologies-container'>
                        <h3>Techonologies</h3>
                        <p>{currentProject?.technology}</p>
                    </div>
                    <div className='project-link-container'>
                        <a className='project-link' href={currentProject?.link}>Open Project</a>
                        {currentProject?.githubFront ? <a className='project-link' href={currentProject?.githubFront }>Github Front </a>:""}
                        {currentProject?.githubBack ? <a className='project-link' href={currentProject?.githubBack}>Github Back</a>:""}
                    </div>
                </div>
            </div>
            <div className='image-container'>
                {currentProject?.img.map(image =>{
                    return <div>
                        <img src={image} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project