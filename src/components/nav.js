const Nav=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a style={{color:"gold"}} className="navbar-brand " href=""><b>IMDb</b></a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
                    <span class="navbar-toggler-icon"></span> */}
                    <div className="input-group">
                    <button type="button" className="btn btn-primary">All <i class="fa fa-angle-down" aria-hidden="true"></i></button>
  <input type="search" className="flexd form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
    <div className=" ml-auto" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a style={{color:"white"}}  className="nav-link" href="#"><b>IMDbPro</b> </a>
      </li>
      <li className="nav-item">
        <a style={{color:"white"}}  className="nav-link" href="#"><b><i class="fa fa-plus-circle" aria-hidden="true"></i> Watchlist</b></a>
      </li>
      <li className="nav-item">
        <a style={{color:"white"}}  className="nav-link" href="#"><b>Sign In</b></a>
      </li>
      
    </ul>
  </div>
  
</div>

    
            </div>
    
        </nav>
      
        
    )
}


export default Nav