import {Link} from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-content">
          <div className="navbar-main">
              <Link to="#" className="navbar-link">Главная</Link>
          </div>
          <div className="navbar-modules">
              <Link to="#" className="navbar-link" onMouseOver={(e) => {e.target.classList.add('btn')}} onMouseOut={(e) => {e.target.classList.remove('btn')}}>Регистрация</Link>
              <Link to="#" className="navbar-link" onMouseOver={(e) => {e.target.classList.add('btn')}} onMouseOut={(e) => {e.target.classList.remove('btn')}}>Войти</Link>
          </div>  
      </div>
    </nav>
  );
}

export default Navbar;