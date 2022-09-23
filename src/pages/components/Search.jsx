import '../../styles/Search.css';

const Search = () => {

  return (
    <div className="search">
        <div className="search-content">
            <div className="search-text">
                <p>Найдите лучшее предложение от ресторана</p>
            </div>
            <div className="search-form">
                <input className="search-form-input" placeholder="Город, адрес, шоссе или ЖК"/>
                <button className="search-form-button btn big">Найти</button>
            </div>
        </div>
    </div>
  );
}

export default Search;
