// Used React Router DOM = it is an NPM package that enables the creation of single-page website that allows navigating without refreshing the page
// Command to install = npm install react-router-dom

import React,{useState} from "react";
import Error from "./error"; 
import Home from "./home";
import ReactDOM  from "react-dom/client";

function Login()
{
    const [uid, setUId] = useState("");
    const [upass, setUPass] = useState("");

    const handleUIdText = (evt)=>{
       setUId(evt.target.value);
    }
    const handleUPassText = (evt)=>{
        setUPass(evt.target.value);
    }
    const handleLoginButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        
        if(uid.length<=0 || upass.length<=0)  // Form Validation
        {
            alert("Please Fill Required Data")
        }
        else 
        {
            if (uid==="admin" && upass==="abc123")  // Defeault ID and Password
            {
                root.render(<Home></Home>);  // If the ID-Pass is correct it will render & display Home Page
            }
            else
            {
                root.render(<Error></Error>) // If the ID-Pass is not correct it will render & display Error Page
            }
        }
    }
    return(
        <div>
           <center>
              <h2>User Login Form</h2>
              <h3>Default ID : admin </h3>
              <h3>Default Password : abc123 </h3>
           </center>
           <table align="center" border={1}>
           <tr>
               <td>User ID</td>
               <td>
                    <input type="text" onChange={handleUIdText} placeholder="Enter User id"/>
               </td>
           </tr>
           <tr>
               <td>Password</td>
               <td>
                    <input type="password" onChange={handleUPassText} placeholder="Enter password"/>
               </td>
           </tr>
           <tr>
               <td></td>
               <td>
                    <button type="submit" onClick={handleLoginButton}>Login</button>
               </td>
           </tr>
           </table>
        </div>
    );
}
export default Login;