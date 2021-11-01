import React from 'react'

import classes from './NavBar.module.css'
const NavBar = () => {
    return (
        <div>
            <header className={classes.Appheader}>

                <h1> PREM KUMAR </h1>
                <a href='#'>      About   </a>
                <a href='#'>   service </a>
                <a href='#'>       Work    </a>
                <a href='#'>     Skills  </a>
                <a href='#'>    contact  </a>
                <a href='https://www.linkedin.com/in/prem-kumar-45763814b/'>    linkedin  </a>
                <a href='https://github.com/premshetty'>    github  </a>
            </header>

        </div>
    )
}
export default NavBar;