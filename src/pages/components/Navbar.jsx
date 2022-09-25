import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { openModal } from '../../rtk/modalSlice';
import '../../styles/Navbar.css';

const Navbar = () => {
	const dispatch = useDispatch();

  const openRegistrationModal = (e) => {
    e.preventDefault();
    dispatch(openModal('Register'));
  } 

  const openLoginModal = (e) => {
    e.preventDefault();
    dispatch(openModal('Login'));
  } 

  return (
    <nav className="navbar">
      <div className="navbar-content">
          <div className="navbar-main">
              <Link to="#" className="navbar-link">Главная</Link>
          </div>
          <div className="navbar-modules">
              <Link to="#" className="navbar-link" onClick={openRegistrationModal} onMouseOver={(e) => {e.target.classList.add('btn')}} onMouseOut={(e) => {e.target.classList.remove('btn')}}>Регистрация</Link>
              <Link to="#" className="navbar-link" onClick={openLoginModal} onMouseOver={(e) => {e.target.classList.add('btn')}} onMouseOut={(e) => {e.target.classList.remove('btn')}}>Войти</Link>
          </div>  
      </div>
    </nav>
  );
}

export default Navbar;