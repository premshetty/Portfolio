import React from 'react'
import Prem5 from '../assets/prem5.png'
import classes from './About.module.css'
import resume from '../assets/premKumar2020_Resume.pdf'
const About = () => {
    return (
        <div className={classes.About}>
            <div className={classes.aboutleft}>

                <img src={Prem5} />
            </div>
            <div className={classes.aboutright}  >
                <h1>ABOUT ME! </h1>
                <p className={classes.paragraph}>I love to work in User <br />
                    Experience & User Interface designing.<br />
                    Because I love to solve the design <br />
                    problem and find easy and  better <br />
                    solutions to solve it.I always try <br />
                    my best to make good user interface <br />
                    with the best user experience. I have <br />
                    been working as a Visual designer from.<br />
                    Lorem ipsum dolor sit amet consectetur  <br />
                    adipisicing elit.Quae, velit recusandae eum <br />
                    necessitatibus blanditiis porro cum, facere <br />
                    qui impedit dolor doloribus quis reiciendis <br />
                    ullam repellendus.

                </p>
                <h3>download my resume :
                    <a href={resume} download> <button type="button" >Here</button>
                    </a>
                </h3>
            </div>

        </div>
    )
}
export default About;