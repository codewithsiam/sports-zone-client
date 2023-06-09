import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navItems = (
        <>
            <li><NavLink to="/" exact="true"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">Home</NavLink></li>
            <li><NavLink to="/instructors" exact="true"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">Instructors</NavLink></li>
            <li><NavLink to="/classes" exact="true"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">Classes</NavLink></li>
            {user && <li><NavLink to="/dashboard " exact="true"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">Dashboard </NavLink></li>}
            <li><NavLink to="/blogs" exact="true"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose">Blogs</NavLink></li>
        </>
    );

    const handleLogout = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100 shadow-sm shadow-primary h-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <h1 className="text-2xl text-primary font-bold md:ml-4">Sports Zone</h1>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="md:mx-10 ml-auto mr-1">

                {user ? (
                    <>
                        {user?.photoURL && (
                            <img title={user?.displayName}
                                className="h-12 w-12 rounded-full border-2 border-primary"
                                src={user?.photoURL}
                            />
                        )}
                        <button onClick={handleLogout} className="ml-3 md:ml-5 btn btn-primary text-white">
                            Logout <FaSignOutAlt></FaSignOutAlt>
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-primary text-white">Login</button>
                    </Link>
                )}


            </div>
        </div>
    );
};

export default Navbar;