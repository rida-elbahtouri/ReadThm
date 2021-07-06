
 const NavBar = (props) => {
    
    const renderHellper = (user) => {
        if (user){
            return (
                <div className="right-position">
                <img src={user.avatar} />
                <span>{user.fullname} </span>
                </div>
            )
        }else {
            return(
                <button onClick={props.authUser}
                className="btn green-btn right-position">
                Sign in
                </button>
            )
        }
    }
    
    
    return (
        <div className="navbar">
            <nav>
            <h1>Medium</h1>
            {renderHellper(false)}
            </nav>
        </div>
    )
}
export default NavBar;