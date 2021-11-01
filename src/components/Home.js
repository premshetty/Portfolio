import React from 'react'
import classes from './Home.module.css'
import Prem4 from '../assets/prem4.png'

const Home = () => {
    return (
        <div className={classes.home} >
            <div className={classes.hometext} >
                <h1 >Hello, I’m</h1>
                <h1 >P R E M   K U M A R</h1>
                <p > <span className={classes.red} >JS DEVELOPER</span> /
                    <span className={classes.blue}>React DEVELOPER</span> </p>
            </div>
            <div className={classes.abtimg}>
                <img className={classes.img} src={Prem4} />
            </div>
        </div>
    )
}
export default Home;