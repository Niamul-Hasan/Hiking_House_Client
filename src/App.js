import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddItems from './Pages/AddItem/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import HikingFooter from './Pages/Footer/HikingFooter';
import Gears from './Pages/Home/Gears/Gears';
import Home from './Pages/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyInventory from './Pages/MyInventory/MyInventory';
import Selected from './Pages/MyInventory/Selected/Selected';
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
        <Route path='/selected' element={<PrivateRoute>
          <Selected /></PrivateRoute>}></Route>
        <Route path='/myInventory/:id' element={<PrivateRoute>
          <MyInventory /></PrivateRoute>}></Route>
        <Route path="/inventory" element={<Gears />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <HikingFooter></HikingFooter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
