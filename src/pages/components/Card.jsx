import '../../styles/Grid.css';

const Card = () => {

  return (
    <div className="card">
        <div className="card-image">
            <img src="" />
        </div>
        <h3 className="card-title"></h3>
        <div className="card-info">
            <p className="card-place"></p>
            <p className="card-desc"></p>
            <p className="card-price"></p>
        </div>
        <button className="card-full-info btn"></button>
    </div>
  );
}

export default Card;