import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator';
import '../../styles/Auth.css';
import Exit from '../components/Exit';
import { login } from '../../api';
import {useDispatch} from 'react-redux';
import { openModal } from '../../rtk/modalSlice';

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [wrongData, setWrongData] = useState(false);

  const acceptNewUser = async (e) => {
      e.preventDefault();
      if (validator.isEmail(emailRef.current.value) && passwordRef.current.value.length >= 8) {
          const tokens = await login({email: emailRef.current.value, password: passwordRef.current.value});
          if (!tokens)
            setWrongData(true);
          else {
            localStorage.setItem("accessToken", tokens.accessToken);
            localStorage.setItem("refreshToken", tokens.refreshToken);
            window.location.reload();
          }
      }
      else
          setWrongData(true);
  }

  return (
    <form className="auth modal">
        <Exit/>
        <div className="login-form form">
            <h3 className="login-title auth-title">
                Войти
            </h3>
            <div className="login-fields fields">
                <input placeholder="Email" type="email" className="email" ref={emailRef}/>
                <input placeholder="Пароль" type="password" className="password" ref={passwordRef}/>
            </div>
            {wrongData && <p className="alarm-message">Неверный логин или пароль</p>}
            <button className="submite-btn btn big" onClick={acceptNewUser}>Войти</button>
            <Link to="#" className="register-link" onClick={(e) => {e.preventDefault(); dispatch(openModal("Register"));}}>Зарегистрироваться</Link>
            <Link to="#" className="forgot-link" onClick={() => {alert("Ну забыл, так забыл")}}>Забыли пароль?</Link>
        </div> 
    </form>
  );
}

export default Login;