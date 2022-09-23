import Card from './Card';
import '../../styles/Grid.css';

const Grid = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid">
        <div className="grid-title">
            <p className="title">Популярные предложения</p>
            <p className="subtitle">Предложения, которые любят наши клиенты</p>
        </div>
        <div className="grid-content">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  );
}

export default Grid;