import { Link } from 'react-router';
import './Header.css'
export default function Header() {

    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <Link to="index.html">
                        <h1>
                            Phone<span>Zone</span>
                        </h1>
                        <p>Your Mobile Technology Hub</p>
                    </Link>
                </div>
                <div className="header-actions">
                    <div className="auth-buttons" id="guest-actions">
                        <Link to="/login" className="btn btn-login">
                            <i className="fas fa-sign-in-alt" />
                            Login
                        </Link>
                        <Link to="/register" className="btn btn-register">
                            <i className="fas fa-user-plus" />
                            Register
                        </Link>
                    </div>
                    <div className="user-menu" id="user-actions">
                        <Link to="/cart" className="btn btn-cart">
                            <i className="fas fa-shopping-cart" />
                            <span className="cart-count">0</span>
                        </Link>
                        <Link to="/logout" className="btn btn-logout">
                            <i className="fas fa-sign-out-alt" />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="primary-nav">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/" className="active">
                                <i className="fas fa-home" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalog">
                                <i className="fas fa-mobile-alt" />
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="product/create">
                                <i className="fas fa-plus-circle" />
                                CreateProduct
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-products">
                                <i className="fas fa-list" />
                                MyProducts
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}