import "./App.css";
import Home from './Home';
import Search from './Search';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
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



// function App() {
//     return (
//         <div className="App">
//             <header className="App-header"> 
//                 {/* <p>test 1,2,3:</p> */}
//             <div className='content'>
//                 {/* <Home /> */}
//                 <Search />
//             </div>
//             </header>
//         </div>
//     );
// }

export default App; 


