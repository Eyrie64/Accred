import './Card.css';
const Card = ({title , value, Icon, myc, iconcolor, bgTextcolor}) => {
    return (
        <div className="dashboard__card"  style={{background: myc}}>
            <div className= "card">
                <p className="card__value">
                    <strong>{value}</strong>
                </p>
                <div className="card__icon" style = {{color: iconcolor}}>{Icon}</div>
            </div>
                <div className="card__info" style = {{backgroundColor: bgTextcolor}}><p>{title}</p></div>
                
                
            
        </div>
    )
}

export default Card