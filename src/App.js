import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import { Search } from './components/Search';
import { ViewAll } from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/Delete' element={<Delete/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes></BrowserRouter>
  );
}

export default App;
