import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Link,Route,Routes} from "react-router-dom";

/* - path = The path prop defines the route path.
   - element = The component prop defines the React component to render when the route path matches the current URL.
   - route = used to define the path of web pages
   - routes = Collection of route. The <Routes> component is used to define the different routes that are available in your application. 
      Each individual route is defined using a <Route> component.
   - link = used to define hyperlink of web pages. Now we will use the <Link> component of react-router-dom to 
      create clickable links that change the URL of the browser and render a different component based on the new URL. 
*/

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
