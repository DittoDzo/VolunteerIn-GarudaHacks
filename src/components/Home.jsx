import {Link} from 'react-router-dom';
import Nav from './Nav'

function Selection(){
  return (
    <>
    <Nav></Nav>
    <div class="position-absolute top-50 start-50 translate-middle">
      <h1 class="font" style={{marginTop: '3rem', fontSize: '50px'}}>VolunteerIn</h1>
      <h5 class="font" style={{marginTop: '1rem', marginBottom: '5rem'}}> Help teenage gather new experiences </h5>
      <div class="mx-auto d-grid gap-2">
      <div class="container text-center">
  <div class="row align-items-center">

    <p> Grow as a: </p>

    <div class="col">
    <div class="card" style={{height: "20rem"}}>
        <img src="src/assets/User.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Volunteer</h5>
          <Link to="/log-in" class='btn btn-primary' style={{width: '8rem', color: 'white', backgroundColor: '#4C1454', marginTop: '1rem'}}>Find Activity</Link>
        </div>
      </div>
    </div>

    <div class="col">
    <div class="card" style={{height: "20rem"}}>
        <img src="src/assets/Buildings.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Organization</h5>
          <Link to="/sign-up" class='btn btn-primary ' style={{width: '8rem', color: 'white', backgroundColor: '#4C1454', marginTop: '1rem'}}>Make Activity</Link>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
    </div>
    </>
)}

export default Selection;