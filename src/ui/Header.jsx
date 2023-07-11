import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder";

// Getting back to main menu function
function Header() {
    return (
        <header>
            <Link to='/'>Yum Yum Book</Link>

            <SearchOrder />

            <p>Tony</p>
        </header>
    );
}

export default Header;
