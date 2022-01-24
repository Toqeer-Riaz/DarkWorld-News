import React from "react";
import '../css/home.css';
import {Link } from "react-router-dom";

function Home(props) {

  return (
    <>
      
      <section id="showcase">
      <div>
            <nav className={"navbar navbar-expand-lg navbar-dark bg-dark text-white bg-opacity-50"}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><strong>DW-News</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* <li className="nav-item"><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link></li> */}
                            <li className="nav-item"><Link className={"nav-link active"} aria-current="page" to="/">About Us</Link></li>
                            <li className="nav-item"><Link className={"nav-link active"} aria-current="page" to="/">Contuct Us</Link></li>

                            
                        </ul>
                     
                       <form className="mx-3 d-flex">
                    <Link className="btn btn-danger mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-danger mx-1" to="/signup" role="button">Signup</Link>
                    </form>

                    </div>

                </div>

            </nav>

        </div>
    

        <div className="home_container">
          <h1>News services</h1>
          <p>Best news Website,get services free</p>
        </div>
        <form className="mx-auto my-4">
        <Link className="btn btn-danger mx-1  px-4" to="/getstart">GetStart</Link>
        </form>
      </section>

      <section id="newsletter">
        <div className="home_container">
          <h1>Subscribe To Our News Site</h1>
          <form>
            <input type="email" placeholder="Enter Email" required />
            <button type="submit" className="button_1">Subscribe</button>
          </form>
        </div>
      </section>


      <footer>
        <p>Acme Web Deisgn, Copyright &copy; 2019</p>
      </footer>


    </>
  );
}

export default Home;
