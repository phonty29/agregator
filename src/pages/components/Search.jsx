import '../../styles/Search.css';
import { useDispatch } from 'react-redux';
import { searchRestaurants } from '../../rtk/restaurantsSlice';

const Search = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="search">
        <div className="search-content">
            <div className="search-text">
                <p>Найдите лучшее предложение от ресторана</p>
            </div>
            <div className="search-form">
                <input className="search-form-input" placeholder="Город, адрес, шоссе или ЖК" onChange={(e) => {dispatch(searchRestaurants(e.target.value))}}/>
                <button className="search-form-button btn big">Найти</button>
            </div>
        </div>
    </div>
  );
}

export default Search;
