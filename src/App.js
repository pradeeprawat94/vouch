import './App.css';
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';



function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
