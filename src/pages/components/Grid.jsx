import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from './Card';
import '../../styles/Grid.css';
import { getRestaurants } from '../../api';
import { setRestaurants, searchRestaurants } from '../../rtk/restaurantsSlice';

const Grid = () => {
  const dispatch = useDispatch();
  const {searchingRestaurants} = useSelector(state => state.restaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (localStorage.getItem("accessToken")) {
      const {count, restaurants} = await getRestaurants(localStorage.getItem("accessToken"));
      dispatch(setRestaurants(restaurants));
      dispatch(setRestaurants(restaurants));
      dispatch(searchRestaurants(''));
    }
  };

  return (
    <div className="grid">
      <div className="grid-body">
        <div className="grid-title">
              <p className="title">Популярные предложения</p>
              <p className="subtitle">Предложения, которые любят наши клиенты</p>
          </div>
          <div className="grid-content">
              {searchingRestaurants.map(restaurant => <Card key={restaurant.id} fields={restaurant}/>)}
          </div>
      </div>
    </div>
  );
}

export default Grid;