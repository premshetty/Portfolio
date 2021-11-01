import React from 'react'
import classes from './Services.module.css'
import services from '../assets/work.jpg'
const Services = () => {
  return (
    <div >
       <h1 className={classes.heading}> Services </h1>
      <div className={classes.Services} >
     
        <div className={classes.content1}>
          <h3> Unique design</h3>
          <p>Donec et venenatis libero.<br />
            Fusceing dapibus pulvinar <br />
            tincidunt. Proin maximus ipsum <br />
            ut scelerisque</p>
        </div>
        <div className={classes.content2}>
          <h3> Different layout</h3>
          <p>Donec et venenatis libero.<br />
            Fusceing dapibus pulvinar <br />
            tincidunt. Proin maximus ipsum <br />
            ut scelerisque</p>
        </div>
        <div className={classes.content3}>
          <h3> Make it simple</h3>
          <p>Donec et venenatis libero.<br />
            Fusceing dapibus pulvinar <br />
            tincidunt. Proin maximus ipsum <br />
            ut scelerisque</p>
        </div>
        <div className={classes.content}>
          <img  src ={services } />
        </div>
      </div>
    </div>
  )
}

export default Services;