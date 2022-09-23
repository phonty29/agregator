import Navbar from './components/Navbar';
import Search from './components/Search';
import Grid from './components/Grid';

const Main = () => {
  return (
    <main className="main">
        <Navbar/>
        <Search/>
        <Grid/>
    </main>
  );
}

export default Main;