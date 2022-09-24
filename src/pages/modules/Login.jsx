import {Link} from 'react-router-dom';
import '../../styles/Auth.css';
import Email from '../components/Email';
import Password from '../components/Password';
import Exit from '../components/Exit';

const Login = () => {

  return (
    <div className="auth">
        <Exit/>
        <div className="login-form form">
            <h3 className="login-title auth-title">
                Войти
            </h3>
            <div className="login-fields fields">
                <Email/>
                <Password/>
            </div>
            <p className="alarm-message">Неверный логин или пароль</p>
            <button className="submite-btn btn big">Войти</button>
            <Link to="#" className="register-link">Зарегистрироваться</Link>
            <Link to="#" className="forgot-link">Забыли пароль?</Link>
        </div> 
    </div>
  );
}

export default Login;