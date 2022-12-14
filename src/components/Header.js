import { Link, NavLink } from "react-router-dom"

function Header() {
    const navBrandStyle = {
        marginLeft: "10px"
    };
    const activeClasses = "nav-item nav-link active";
    const inactiveClasses = "nav-item nav-link";
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" 
            style={navBrandStyle} >E-Commerce</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink to="/" 
                className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses}>Home</NavLink>
            <NavLink to="/products" 
                className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses}>Products</NavLink>
            <a className="nav-item nav-link" href="#">Cart</a>
        </div>
        </div>
    </nav>
    );
}

export default Header;