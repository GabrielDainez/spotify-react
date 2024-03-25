

import './App.css';
import Header from '../src/componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import axios from 'axios';


function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
