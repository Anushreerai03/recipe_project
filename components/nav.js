import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const nav = () => {
  return (

        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
            <div className="container-fluid">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoUTjWws0SM0FvaJvTUNg30Muzu7GGeFzFA&usqp=CAU" width={"100px"} height="80px" alt=''/>
               <Link to="/" className="navbar-brand">MANGALORE SMART BITES</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/MenuPage" className="nav-link">Menu Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AboutUs" className="nav-link">About us</Link>
                    </li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="search recipe" aria-expanded="false">
                            Search recipe
                        </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"></a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </ul>
            </div>

        </nav>

  )
}

export default nav;
