import React from "react"
import {Link} from "react-router-dom"

export default function Nav () {
    return (
       <nav>
        <ul className = "li-links">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
        </ul>



       </nav>
    )

}