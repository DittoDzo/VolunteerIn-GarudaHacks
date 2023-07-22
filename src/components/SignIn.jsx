import Nav from "./Nav"
import { Link } from "react-router-dom"

function SignIn(){
    return (
    <>
        <Nav></Nav>
        <div style={{width: '25rem', marginTop:"5rem", marginBottom:"5rem"}} class="mx-auto">
        <h1 style={{marginBottom:"5rem"}}>Sign Up</h1>
        <p class="text-form"> Email </p>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput" class="text-holder" style={{color: '#779EBB', fontSize: '14px'}}>name@example.com</label>
        </div>

        <p class="text-form"> Name </p>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput" class="text-holder" style={{color: '#779EBB', fontSize: '14px'}}>Your/Organization name</label>
        </div>

        <p class="text-form"> Password </p>
        <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword" class="text-holder" style={{color: '#779EBB', fontSize: '14px', marginBottom: '1rem'}}>Password</label>
        </div>

        <span class="text-form" style={{marginLeft: '2rem', marginRight: '6rem'}}>Birthdate Or Niche</span> <span class="text-form" style={{marginRight: '3rem'}}>Sign Up as a</span>
        <div class="form-floating mb-3">
        <input type="date" style={{width: '10rem', height: '3rem', fontSize: '14px', display: 'inline-block', marginRight: '3rem'}}></input>
        <select class="form-select" aria-label="Default select example" style={{width: '10rem', fontSize: '14px', marginBottom: '1rem', display: 'inline-block'}}>
        <option value="0">Organization</option>
        <option value="1">Volunteer</option>
        </select>
        </div>

        <p className="text-form">About</p>
        <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
        <label for="floatingTextarea2" class="text-holder" style={{color: '#779EBB', fontSize: '14px'}}>Tell us about your goals, etc...</label>
        </div>

        <button type="button" class="btn btn-outline-primary" style={{marginTop: '5rem', color: 'white', backgroundColor: '#4C1454', marginBottom: '1rem'}}>Sign Up</button>
        <p>Already have an account? <Link to="/log-in" style={{marginTop: '1rem'}}>Log In</Link> here</p>
        </div>
        
    </>
    )
}

export default SignIn