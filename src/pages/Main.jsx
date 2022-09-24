import Navbar from './components/Navbar';
import Search from './components/Search';
import Grid from './components/Grid';
import Login from './modules/Login';
import Register from './modules/Register';

const Main = () => {
  return (
    <main>
        <Navbar/>
        <Search/>
        <Grid/>
        <div className="temp">
          <Login/>
          <Register/>
        </div>
    </main>
  );
}

export default Main;