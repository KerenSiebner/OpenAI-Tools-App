import { Link, NavLink } from "react-router-dom";

export function AppHeader() {
    return <header className="App-header">
        <Link className="logo-link" to="/">
            <img src="  https://s3-media0.fl.yelpcdn.com/assets/public/burst_white.yji-69d3bd788c1013a1c15e.svg" alt="" width="54" className="logo" />
            <h2 >Gifty</h2>
        </Link>
        <nav>
            <NavLink className='nav-link' to='/'>Shop</NavLink>
            <NavLink className='nav-link' to='/how-it-works'>How it works</NavLink>
            <NavLink className='nav-link' to='/chat'>Chat Support</NavLink>
        </nav>
    </header>
 }
 