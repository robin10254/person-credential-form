import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex-row navbar">
                <div className="margin-right card shadow-lg p-3 mb-5 bg-white rounded">
                    <Link to=''>
                        <text>Cancel</text>
                    </Link>
                </div>
                <div className="margin-right card shadow-lg p-3 mb-5 bg-white rounded">
                    <Link to='/searchlistview'>
                        <text>Search List View</text>
                    </Link>
                </div>
                <div className="margin-right card shadow-lg p-3 mb-5 bg-white rounded">
                    <Link to='/listview'>
                        <text>List View</text>
                    </Link>
                </div>
        </nav>
    );
}

export default Navbar;