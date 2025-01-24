import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynavbar from './Components/Mynavbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Mynavbar/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
}

export default App;
