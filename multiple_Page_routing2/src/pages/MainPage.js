import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
import {Link,Route,Routes} from "react-router-dom";

/* link = used to define hyperlink of web pages
   route = used to define the path of web pages
   routes = Collection of route. */

   function MainPage()
   {
    return(
      <center>
       <div>
          <div>
             <Link to = "/home">Home</Link><span> </span>
             <Link to = "/about">About us</Link><span> </span>
             <Link to = "/contact">Contact us</Link><span> </span>
          </div>
          <div>
             <Routes>
                 <Route path ="/home" element={<Home></Home>}></Route>
                 <Route path ="/about" element={<About></About>}></Route>
                 <Route path ="/contact" element={<Contact></Contact>}></Route>
             </Routes>
          </div>
       </div>
       </center>
    );
   }
   export default MainPage;