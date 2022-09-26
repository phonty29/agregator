import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Auth.css';
import Exit from '../components/Exit';
import validator from 'validator';
import { register } from '../../api';

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const samePasswordRef = useRef(null);
  const [acceptCondo, setAcceptCondo] = useState(false);

  const createNewUser = async (e) => {
    e.preventDefault();
    if (validator.isEmail(emailRef.current.value) && passwordRef.current.value.length >= 8 && samePasswordRef.current.value == passwordRef.current.value && acceptCondo) {
        const tokens = await register({email: emailRef.current.value, nickname: "test", phone: "77777777777", password: passwordRef.current.value});
        console.log(tokens);
        if (!tokens)
            alert("Неверные данные пользователя");
        else {
            localStorage.setItem("accessToken", tokens.accessToken);
            localStorage.setItem("refreshToken", tokens.refreshToken);
            window.location.reload();
        }            
    }
    else
        alert("Неверные данные пользователя");
  }

  return (
    <div className="auth modal">
        <Exit/>
        <form className="register-form form">
            <h3 className="register-title auth-title">
                Зарегистрироваться
            </h3>
            <div className="register-fields fields">
                <input placeholder="Email" type="email" className="email" ref={emailRef}/>
                <input placeholder="Пароль" type="password" className="password" ref={passwordRef}/>
                <input placeholder="Повторить пароль" type="password" ref={samePasswordRef}/>
            </div>
            <div className="register-accept">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={e => {setAcceptCondo(e.target.checked)}}/>
                <label className="register-accept-condition form-check-label" htmlFor="flexCheckDefault">
                    Я принимаю условия Пользовательского соглашения, политики конфиденциальности, Обработки и распространения персональных данных
                </label>
            </div>               
            <button className="submite-btn btn big" onClick={createNewUser}>Далее</button>
        </form> 
    </div>
  );
}

export default Register;