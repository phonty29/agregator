import {useEffect} from 'react';
import Card from './Card';
import '../../styles/Grid.css';
import { getRestaurants } from '../../api';

const Grid = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const restaurants = await getRestaurants(localStorage.getItem("accessToken")) 
    console.log(restaurants);
  };

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