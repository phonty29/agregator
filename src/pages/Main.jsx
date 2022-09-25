import {useSelector} from 'react-redux';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Grid from './components/Grid';
import Login from './modal/Login';
import Register from './modal/Register';

const Main = () => {
	const {isModalOpen, currentModal} = useSelector(state => state.modal);

  return (
    <main>
      <div className={`wrapper${isModalOpen ? " modal-wrapper" : ""}`}>
          <Navbar/>
          <Search/>
          <Grid/>
      </div>
      {isModalOpen && currentModal=="Login" && <Login/>}
      {isModalOpen && currentModal=="Register" && <Register/>}
    </main>
  );
}

export default Main;