import "./App.css";
import Home from './Home';
import Search from './Search';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import CustomizedMenus  from './Header';
import ButtonAppBar  from './Header';




function App() {
  return (
    
    <div>
      <ButtonAppBar />
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Store new Tunes </Link>
            </li>
            <li>
              <Link to="/search">Search Tunes</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App; 


