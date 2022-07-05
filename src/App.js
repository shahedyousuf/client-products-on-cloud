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
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='allProducts' element={<AllProducts></AllProducts>}></Route>
      </Routes>
    </div>
  );
}

export default App;
