import Card from './Card';
import '../../styles/Grid.css';

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid-body">
        <div className="grid-title">
              <p className="title">Популярные предложения</p>
              <p className="subtitle">Предложения, которые любят наши клиенты</p>
          </div>
          <div className="grid-content">
              <Card/>
          </div>
      </div>
    </div>
  );
}

export default Grid;