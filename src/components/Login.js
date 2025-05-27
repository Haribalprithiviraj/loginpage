import React from "react"
function Login(){
    return(
        <div class="container">
         <h1 class="logo">Login</h1>
         <form method="get">
            <table>
                <tr>
                    <td>
                               <label id="label1">E-mail id or username</label> 
                    </td>
                    <td>
                               <input title="E-mailid" id="email" placeholder="Enter E-mail id"  required />
                    </td>
                </tr>
                <tr>
                    <td>
                               <label id="label2">Password</label> 
                    </td>
                    <td>
                              <input type="password" id="password" title="password" placeholder="Enter password"  required />
                    </td>
                </tr>
                <tr>
                    <td>
                            <button class="login" onClick="popup()" title="login">Login</button>
                    </td>
                </tr>
            </table>
         </form>
         </div>
    )
}
export default Login