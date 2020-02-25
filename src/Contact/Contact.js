import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'

const Contact = () => {
    return(
        <div>
            <Navbar />
            <div id='wrapper'>
                <h1 id='title'>
                    I am looking for new projects and opportunities. Contact me!
                </h1>

                <div id='card'>
                    Jeffrey Thorslund <br/>
                    jeffrey.thorslund@gmail.com <br/>
                </div>
            </div>
        </div>
    )
}

export default Contact