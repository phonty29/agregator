import '../../styles/Grid.css';
import imageCard from '../../assets/images/Rectangle 1018.png';

const Card = ({fields}) => {
  return (
    <div className="card">
        <div className="card-image">
            <img src={imageCard} />
        </div>
        <div className="card-body">
            <div className="card-text">
              <h3 className="card-title">{fields.title}</h3>
              <p className="card-location">{fields.coords.address_name}</p>
              <p className="card-desc">{fields.description.substring(0, 30)}...</p>
              <p className="card-schedule">График работы: {fields.schedule.opening} - {fields.schedule.closing}</p>
            </div>
            <button className="card-btn btn">Подробнее</button>
        </div>
    </div>      
  );
}

export default Card;
