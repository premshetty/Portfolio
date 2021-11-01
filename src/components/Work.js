
import React from 'react'
import classes from './Work.module.css'
import work from '../assets/trippy.jpg'
import property from '../assets/property.JPG'
import random from '../assets/random.JPG'
import scrollbar from '../assets/scrolllbar.JPG'
const Work = () => {
    let img = {
        backgroundImage: "url(" + work + ")",
        width: '100%',
        borderRadius:'50px',
        paddingTop:'30px',
        marginTop:'30px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'auto'
    }
    return (
        <div className={classes.workright}>
            <h1 className={classes.h1} > Work </h1>
            <div style={img} className={classes.Work} >
                <p> click on the image to see the project </p>
                <div  className={classes.img} >
                   <a href = 'https://app.netlify.com/sites/zealous-fermat-e9d5fd/overview'><img  className={classes.workImg} src={property} /> </a>
                    
                </div>
                <div className={classes.img} >
                   <a href='https://premshetty.github.io/Random100UsersAPI/'>  <img className={classes.workImg} src={random} /> </a>
                </div>
                <div className={classes.img} >
                <a href='https://premshetty.github.io/jsonscroll/'>  <img className={classes.workImg} src={scrollbar} /> </a>
                </div>
            </div>
        </div>

    )
}
export default Work;

{/* <iframe className={classes.work1 } src="https://premshetty.github.io/jsonscroll/" 
title="Iframe Example"></iframe>
<iframe className={classes.work1 } src="https://premshetty.github.io/jsonscroll/" 
title="Iframe Example"></iframe>
<iframe className={classes.work1 } src="https://premshetty.github.io/jsonscroll/" 
title="Iframe Example"></iframe> */}