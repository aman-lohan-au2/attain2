import React from 'react'

function Login(){
    return(
        <>
    <div className="sidenav">
              <div className="login-main-text">
                 <h2>ApplicationLogin Page</h2>
                 <p>Login or register from here to access</p>
              </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <a type="submit" href="/Home" className="btn btn-black">Login</a>
                  <a type="submit" href="/signup" className="btn btn-secondary">Register</a>
               </form>
            </div>
         </div>
      </div>
      </>
      );
}

export default Login