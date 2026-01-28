import { Outlet, NavLink, Link } from "react-router";

const imgUrl = 'https://plus.unsplash.com/premium_vector-1721296174785-411e92fb1924?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const Layout = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container justify-content-start">
                <Link className="navbar-brand" to='/'>
                    <img src={imgUrl} alt="logo-pic"
                         style={{width: 80}} />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>首頁</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/products'>產品列表</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/carts'>購物車</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <Outlet />
        </>
    )
}

export default Layout;