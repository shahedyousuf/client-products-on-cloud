import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Details from './components/Products/Details';
import AllProducts from './pages/AllProducts/AllProducts';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import AddProduct from './pages/AddProduct/AddProduct';
import ManageProduct from './pages/ManageProduct/ManageProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}></Route>
        <Route path='/addProduct' element={<RequireAuth>
          <AddProduct />
        </RequireAuth>}></Route>
        <Route path='/manageProduct' element={<RequireAuth>
          <ManageProduct />
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
