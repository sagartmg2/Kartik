import { Link } from "react-router-dom"

const Navbar = () => <div>
    <nav>
        <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/card">card</Link></li>
            {/* <li><a href="/about">about</a></li>
            <li><a href="/card">card</a></li> */}
        </ul>
    </nav>
</div>

export default Navbar

