import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

// Getting back to main menu function
function Header() {
    return (
        <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200">
            <Link to='/' className="tracking-widest">Yum Yum Book</Link>

            <SearchOrder />

            <Username />
        </header>
    );
}

export default Header;
