import React from "react"
import { handleloginclick } from "./alert"
function Login(){
    return(
        <div id="container">
         <h1 id="logo">Login</h1>
         <form method="get">
          
                               <label id="label1">E-mail id or username</label>  
                               
                               <input title="E-mailid" id="email" placeholder="Enter E-mail id"  required />
                    
                               <label id="label2">Password</label> 
                   
                              <input type="password" id="password" title="password" placeholder="Enter password"  required />
                    
                            <button id="login" onClick={handleloginclick()} title="login">Login</button>
                    
         </form>
         </div>
    )
}
export default Login