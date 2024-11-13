import './card.css'

type cardPropsType = {
    title: string,
    category: string,
    id: number
    cover : string,
}


const Card: React.FC<cardPropsType> = ({cover,title,category,id}) => {
    return (
        <div className="card">
            <div className="card-img-container">
                <a href={`test/${id}`}>
                    <img src={cover} alt="" />
                </a>
            </div>
            <div className="card-text-container">
                <h3>{title}</h3>
                <p>{category}</p>
                <a className='card-link' href={`test/${id}`}>
                    Show Project 
                </a>
            </div>
        </div>
    )
}
export default Card