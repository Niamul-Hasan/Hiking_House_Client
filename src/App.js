import { Route, Routes } from 'react-router-dom';
import AddItems from './Pages/AddItem/AddItems';
import HikingFooter from './Pages/Footer/HikingFooter';
import Gears from './Pages/Home/Gears/Gears';
import Home from './Pages/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import NavBar from './Pages/NavBar/NavBar';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="/add" element={<PrivateRoute>
          <AddItems />
        </PrivateRoute>}></Route>
        <Route path="/inventory/:id" element={<PrivateRoute>
          <InventoryDetails />
        </PrivateRoute>}></Route>
        <Route path='/manageIn' element={<PrivateRoute>
          <ManageInventory /></PrivateRoute>}></Route>
        <Route path='/myInventory' element={<PrivateRoute>
          <ManageInventory /></PrivateRoute>}></Route>
        <Route path="/inventory" element={<Gears />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <HikingFooter></HikingFooter>
    </div>
  );
}

export default App;
