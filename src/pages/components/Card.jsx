import '../../styles/Grid.css';
import imageCard from '../../assets/images/Rectangle 1018.png';

const Card = () => {

  return (
    <div className="card">
        <div className="card-image">
            <img src={imageCard} />
        </div>
        <div className="card-body">
            <div className="card-text">
              <h3 className="card-title">Infinity Plaza</h3>
              <p className="card-location">Анталья, Турция</p>
              <p className="card-desc">Один из крупнейших ресторанов..</p>
              <p className="card-price">от $56 000 000</p>
            </div>
            <button className="card-btn btn">Подробнее</button>
        </div>
    </div>      
  );
}

export default Card;