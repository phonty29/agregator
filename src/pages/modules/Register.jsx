import {Link} from 'react-router-dom';
import '../../styles/Auth.css';
import Email from '../components/Email';
import Password from '../components/Password';
import Exit from '../components/Exit';

const Register = () => {

  return (
    <div className="auth">
        <Exit/>
        <div className="register-form form">
            <h3 className="register-title auth-title">
                Зарегистрироваться
            </h3>
            <div className="register-fields fields">
                <Email/>
                 <Password/>
                <input placeholder="Повторить пароль"/>
            </div>
            <div className="register-accept">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                <label className="register-accept-condition form-check-label" htmlFor="flexCheckDefault">
                    Я принимаю условия Пользовательского соглашения, политики конфиденциальности, Обработки и распространения персональных данных
                </label>
            </div>               
            <button className="submite-btn btn big">Далее</button>
        </div> 
    </div>
  );
}

export default Register;