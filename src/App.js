import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Registration from './pages/Registration/Registration';
import Blogs from './pages/Blogs/Blogs';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import InventoryId from './pages/InventoryId/Update';
import Inventories from './pages/Inventories/Inventories';
import AddNewItem from './pages/AddNewItem/AddNewItem'
import Update from './pages/InventoryId/Update';
import MyItem from './pages/MyItem/MyItem';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/addnewitem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth><MyItem></MyItem></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/items/:id' element={
          <RequireAuth><Update></Update></RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
