import { Link } from 'react-router-dom';
import Nav from './Nav';

function LogIn() {
  return (
    <>
      <Nav />
      <div className='' style={{marginTop: '5rem'}}>
      <h1 style={{marginBottom:"5rem"}}>Log In</h1>
      <p class="text-form"> Email </p>
      <div className="form-floating mb-3 mx-auto" style={{width: "25rem", color: '#779EBB', fontSize: '14px'}}>
        <input
          type="email"
          className="form-control input-width"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <p class="text-form"> Password </p>
      <div className="form-floating mx-auto" style={{width: "25rem", color: '#779EBB', fontSize: '14px'}}>
        <input
            
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword ">Password</label>
      </div>
      <button type="button" className="btn btn-outline-primary" style={{marginTop: '5rem', color: 'white', backgroundColor: '#4C1454', marginBottom: '1rem'}}>
        Log In
      </button>
      <p>
        Don’t have an account yet? <Link to="/sign-in" style={{marginTop: '1rem'}}>Sign In</Link> now
      </p>
      </div>
      
    </>
  );
}

export default LogIn;