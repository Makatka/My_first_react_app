import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import {Routes, Route} from 'react-router-dom';
import WrongAddress from "./components/WrongAddress/WrongAddress";
import List from "./components/List/List";

const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="*" element={<WrongAddress/>}/>
          <Route path="/list/:listId" element={<List/>}/>
        </Routes>
      </Container>
    </main>
  );
};

export default App;