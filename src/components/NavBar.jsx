import { LuUserCircle } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/crafts">Crafts</NavLink></li>
                        <li>
                            <a>Categories</a>
                            <ul className="p-2">
                                <li><NavLink to="crafts-by-category/Clay Sculpture">Clay Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Stone Sculpture">Stone Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Beaded Sculpture">Beaded Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Metal Sculpture">Metal Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Food carving">Food carving</NavLink></li>
                                <li><NavLink to="crafts-by-category/Natural Material Sculpture">Natural Material Sculpture</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/add-craft">Add Craft</NavLink></li>
                        <li><NavLink to="/my-crafts">My Crafts</NavLink></li>
                    </ul>
                </div>
                <h2 className="text-xl font-bold">Artifex</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/crafts">Crafts</NavLink></li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2 z-10">
                                <li><NavLink to="crafts-by-category/Clay Sculpture">Clay Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Stone Sculpture">Stone Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Beaded Sculpture">Beaded Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Metal Sculpture">Metal Sculpture</NavLink></li>
                                <li><NavLink to="crafts-by-category/Food carving">Food carving</NavLink></li>
                                <li><NavLink to="crafts-by-category/Natural Material Sculpture">Natural Material Sculpture</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to="/add-craft">Add Craft</NavLink></li>
                    <li><NavLink to="/my-crafts">My Crafts</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <LuUserCircle className="text-[32px]" />
                <a className="btn">Log in</a>
            </div>
        </div>
    );
};

export default NavBar;