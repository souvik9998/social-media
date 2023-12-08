import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Test from './pages/Test';
import HomeLayout from './components/Home/HomeLayout';
import Timeline from './components/Timeline';
import Notfication from './components/Notfication';
import Messages from './components/Messages';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomeLayout/>} >
          <Route path='/' element={<Timeline/>}/>
          <Route path='/notification' element={<Notfication/>}/>
        </Route>
        <Route path='/login' element ={<Login />}/>
        <Route path='/register' element ={<Register />}/>
      </Route>
      <Route path='/messages' element={<Messages/>}/> 
      <Route path='/test' element ={<Test />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
