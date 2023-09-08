import {Link} from "react-router-dom"

export default function Navbar({token}){
    // TODO show diff links if logged in or not.
    // TODO Implement logout functionality
   return (
    <nav id="navbar">
            <Link to = "/home"> Home</Link>
            <Link to = "/productlist"> ProductList</Link>
            {/* <Link to = "/productdetails"> ProductDetails</Link> */}
            <Link to = "/login"> Login</Link>
            <Link to = "/register"> Register</Link>
        <button>Logout</button>
        </nav>
   )
}