import { Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Products/Details';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
