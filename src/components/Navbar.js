import React,{useEffect} from 'react'
import {Link,useLocation,useHistory} from 'react-router-dom'

function Navbar(props) {
//     let history=useHistory()
//   const logout=()=>{
//     localStorage.removeItem('token');
//     history.push('/login')
//   }
    let location= useLocation();
    useEffect(() => {
      
    }, [location])
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>,
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">DW-News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/general"?"active":""}`} aria-current="page" to="/general">General</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/business"?"active":""}`} aria-current="page" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`} aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/health"?"active":""}`} aria-current="page" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/science"?"active":""}`} aria-current="page" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/sports"?"active":""}`} aria-current="page" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} aria-current="page" to="/technology">Technology</Link></li>
    
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?<div>Enable DarkMode</div>:<div>Disable DarkMode</div>}</label>
                    </div>
                    {/* {!localStorage.getItem('token')?<form className="mx-3 d-flex">
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button onClick={logout} className=" mx-3 btn btn-dark">Logout</button>} */}
            
                    </div>

                </div>

                 </nav>
    
        </div>
    )
}

export default Navbar
