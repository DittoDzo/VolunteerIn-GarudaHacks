import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useState } from 'react';
import { createBasicUser } from '../api/fetchApi';

function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogIn = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        email: email,
        password: password
      };
      const createdUser = await createBasicUser(newUser);
      console.log("New user sucessfully created", createdUser)

      const result = await response.json();
      console.log(result)

    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Nav />
      <div className='' style={{ marginTop: '5rem' }}>
        <h1 style={{ marginBottom: "5rem" }}>Log In</h1>
        <p class="text-form"> Email </p>
        <div className="form-floating mb-3 mx-auto" style={{ width: "25rem", color: '#779EBB', fontSize: '14px' }}>
          <input
            type="email"
            className="form-control input-width"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <p class="text-form"> Password </p>
        <div className="form-floating mx-auto" style={{ width: "25rem", color: '#779EBB', fontSize: '14px' }}>
          <input

            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="floatingPassword ">Password</label>
        </div>
        <button type="button" className="btn btn-outline-primary" style={{ marginTop: '5rem', color: 'white', backgroundColor: '#4C1454', marginBottom: '1rem' }} onClick={handleLogIn}>
          Log In
        </button>
        <p>
          Don’t have an account yet? <Link to="/sign-up" style={{ marginTop: '1rem' }}>Sign Up</Link> now
        </p>
      </div>

    </>
  );
}

export default LogIn;