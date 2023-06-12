import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Login />}></Route>
      <Route path='/register' element ={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
