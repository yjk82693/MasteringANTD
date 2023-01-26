import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import ButtonAnt from './Pages/Button/Button';
import InputAnt from './Pages/Input/Input';
import FormAnt from './Pages/Form/Form';
import SelectAnt from './Pages/Select/Select';
import TableAnt from './Pages/Table/Table';
import SearchAnt from './Pages/Search/Search';
import CRUDAnt from './Pages/CRUD/CRUD';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/button' element={<ButtonAnt />}/>
          <Route path='/input' element={<InputAnt />}/>
          <Route path='/form' element={<FormAnt />}/>
          <Route path='/select' element={<SelectAnt />}/>
          <Route path='/table' element={<TableAnt />}/>
          <Route path='/crud' element={<CRUDAnt />}/>
          <Route path='/search' element={<SearchAnt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
