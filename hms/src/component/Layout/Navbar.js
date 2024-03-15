import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hostel Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link to="/adminRegistration" class="nav-link active" aria-current="page" href="#">Admin</Link>
        </li>
        <li class="nav-item">
          <Link to="/canteenRegistration" class="nav-link active" aria-current="page" href="#">Canteen</Link>
        </li>
        <li class="nav-item">
          <Link to="/wardenRegistration" class="nav-link active" aria-current="page" href="#">Warden</Link>
        </li>
        <li class="nav-item">
          <Link to="/laundryRegistration" class="nav-link active" aria-current="page" href="#">Laundry</Link>
        </li>
        <li class="nav-item">
          <Link to="/studentRegistration" class="nav-link active" aria-current="page" href="#">Std Registration</Link>
        </li>
        <li class="nav-item">
          <Link to="/parentRegistration" class="nav-link active" aria-current="page" href="#">Parent Registration</Link>
        </li>
        <li class="nav-item">
          <Link to="/studentLogin" class="nav-link active" aria-current="page" href="#">Std Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/adminLogin" class="nav-link active" aria-current="page" href="#">Admin Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/wardenLogin" class="nav-link active" aria-current="page" href="#">Warden Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/canteenLogin" class="nav-link active" aria-current="page" href="#">Canteen Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/laundryLogin" class="nav-link active" aria-current="page" href="#">Laundry Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/parentLogin" class="nav-link active" aria-current="page" href="#">parent Login</Link>
        </li>

        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
