import { Link } from "react-router-dom"
import './NavMain.css'

function NavMain(){
    return (
        <>
        <nav class="navbar navbar-expand-lg sticky-top" style={{padding: "1rem",backgroundColor: "#4C1454", width:"100%",height:"100%"}} >
  <div class="container-fluid" >
    <Link to={'/'} class="navbar-brand text-color" style={{color: 'white', fontFamily: 'Montserrat',fontWeight: 700, fontSize: '24px'}}>VolunteerIn</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link to={'/'} class="nav-link active text-color" style={{color: 'white'}}>Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-color" style={{color: 'white'}} href="#">Activities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-color" style={{color: 'white'}} href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-color" style={{color: 'white'}} href="#">Profile</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavMain