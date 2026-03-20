import { Link, NavLink } from "react-router-dom";
import Banner from "./Banner";

export default function AppHeader() {
    return (
        <>
            <Banner>Sign up and get 20% off to your list order.</Banner>
            <header id="app-header">
                <div className="app-container">
                    <div className="header-wrapper">
                        <h1>Shop</h1>

                        <nav id="pagination-nav">
                            <NavLink to="/" >Home</NavLink>
                            <NavLink to="/about-us" >Chi Siamo</NavLink>
                            <NavLink to="/products" >Prodotti</NavLink>
                        </nav>

                        {/* <div className="search-bar">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Search for products ..." />
                    </div> */}

                        <nav id="op-nav">
                            <Link to="/cart">
                                <i className="bi bi-cart2"></i>
                            </Link>
                            <Link to="/profile">
                                <i className="bi bi-person-circle"></i>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}