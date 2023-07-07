
import './App.css';
// import ShoppingCart from './components/ShoppingCart';
// import TodoList from "./components/Todolist"


// function App() {
//   return (
//    <>
//    <TodoList/>
//    {/* <ShoppingCart/> */}
//    </>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// const App = () => {
//   return (
       
//         <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Nav />}>
//           <Route index element={<Home />} />
         
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// function Nav(){
//   return<>
//   <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
// </div>
//   </>
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/Todolist';
import ShoppingCart from './components/ShoppingCart';
import Movies from './components/Movies';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
    <div>
     
      
  <NavBar/>
     
      
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/shopping" element={<ShoppingCart/>} />
        <Route path="/fetchapi" element={<Movies/>} />
      </Routes>
    </div>
  </Router>
  );
};

function NavBar(){
  return(
    <>
    <div className='nav' >
    <nav className='new'>
      
      <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li>
              <Link to="/todo" className="nav-link">Todo List</Link>
            </li>
            <li>
              <Link to="/shopping" className="nav-link">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/fetchapi" className="nav-link">Movies</Link>
            </li>
          </ul>
      </nav>
    </div>
    </>
  )
}

export default App;
