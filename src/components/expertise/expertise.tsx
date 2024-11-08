import './expertise.css'


type expertiseTypeProps = {
    title: string;
    description: string;
    img: string;
}


const Expertise: React.FC<expertiseTypeProps> = ({ title, description, img }) =>{
    return (
        <div className="expertise-container">
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