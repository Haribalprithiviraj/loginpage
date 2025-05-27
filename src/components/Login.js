import React from "react"
function Login(){
    return(
        <div class="container">
         <h1 id="login">Login</h1>
         <form method="get" >
            <table class="table">
                <tr>
                    <td>
                        E-mail id or username 
                    </td>
                    <td>
                        <input title="E-mailid" id="email"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password
                    </td>
                    <td>
                        <input type="password" id="password" title="password"></input>
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