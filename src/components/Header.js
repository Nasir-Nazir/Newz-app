import React, { useState } from 'react'
import Head from './Head'
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    const [navbar, setnavbar] = useState(false)

    return (
        <>
            <marquee>Connect with your Community</marquee>
            <Head />
            <header>
                <div className="container paddingSm">
                    <nav>
                        <ul className={navbar ? "navbar" : "flex"} onClick={() => setnavbar(false)}>
                            <li ><Link to='/home'>Home</Link></li>
                            <li ><Link to='/business'>Business</Link></li>
                            <li ><Link to='/entertainment'>Entertainment</Link></li>
                            <li ><Link to='/general'>General</Link></li>
                            <li ><Link to='/health'>Health</Link></li>
                            <li ><Link to='/sports'>Sports</Link></li>
                            <li ><Link to='/science'>Science</Link></li>
                            <li ><Link to='/technology'>Technology</Link></li>
                            <Link to="/search"> <span class="material-symbols-outlined">
                                search
                            </span></Link>
                            {/* <Link to="/search"><button type="submit">Search</button></Link> */}
                        </ul>

                        <button className="barIco" onClick={() => setnavbar(!navbar)}>
                            {navbar ? <i class="fa-solid fa-x" /> : <i class="fa-solid fa-bars" />}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header