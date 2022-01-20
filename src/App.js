import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './pages/Home';

const App = () => {
  return <>
    <BrowserRouter>
      <Routes path='/'>
        <Route path='/login' element={<Login />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;