import { Link } from "react-router-dom"

// Getting back to main menu function
function Header() {
    return (
        <header>
            <Link to='/'>Yum Yum Book</Link>

            <p>Tony</p>
        </header>
    );
}

export default Header;
