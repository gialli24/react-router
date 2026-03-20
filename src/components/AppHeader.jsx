import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header>
            <h1>React Router Store</h1>

            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about-us" >Chi Siamo</NavLink>
                <NavLink to="/products" >Prodotti</NavLink>
            </nav>
        </header>
    );
}