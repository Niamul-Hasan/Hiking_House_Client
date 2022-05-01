import { Route, Routes } from 'react-router-dom';
import AddItems from './Pages/AddItem/AddItems';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NavBar from './Pages/NavBar/NavBar';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="/add" element={<AddItems />}></Route>
      </Routes>

    </div>
  );
}

export default App;
