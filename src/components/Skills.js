import React from 'react'
import classes from './Skills.module.css'
const Skills = () => {
   
    return (
        <div className={classes.wrapper}>
            <div className={ classes.container}>
                <h2> Skills </h2>
                <div className={classes.skills}>
                    <div className={classes.details}>
                        <span>HTML</span>
                       
                    </div>
                    <div className={classes.bar}>
                        <div id={classes.htmlbar}></div>
                    </div>
                </div>
                <div className={classes.skills}>
                    <div className={classes.details}>
                        <span>CSS</span>
                        
                    </div>
                    <div className={classes.bar}>
                        <div id={classes.cssbar}></div>
                    </div>
                </div>
                <div className={classes.skills}>
                    <div className={classes.details}>
                        <span>Javascript</span>
                        
                    </div>
                    <div className={classes.bar}>
                        <div id={classes.javascriptbar}></div>
                    </div>
                </div>
                <div className={classes.skills}>
                    <div className={classes.details}>
                        <span>React js</span>
                       
                    </div>
                    <div className={classes.bar}>
                        <div id={classes.jQuerybar}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Skills;