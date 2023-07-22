import { Link } from "react-router-dom"


function Nav(){
    return (
        <>
<nav class="navbar navbar-expand-lg" style={{padding: "1rem",backgroundColor: "#4C1454", width:"100%",height:"100%"}} >
  <div class="container-fluid" >
    <Link to={'/'} class="navbar-brand text-color" style={{color: 'white', fontFamily: 'Montserrat',fontWeight: 700, fontSize: '24px'}}>VolunteerIn</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul class="d-flex navbar-nav" role="search">
      <li class="nav-item">
      <Link to={'/log-in'} class="navbar-brand text-color" style={{color: 'white', fontFamily: 'Montserrat', fontSize: '18px'}}>Log In</Link> <span style={{color: 'white'}}> | </span>
        </li>
        <li class="nav-item">
        <Link to={'/sign-up'} class="navbar-brand text-color" style={{color: 'white', fontFamily: 'Montserrat', marginLeft: '1rem', fontSize: '18px'}}>Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Nav