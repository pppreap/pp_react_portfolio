import React from 'react';
import avatarImage from './aboutavatar.png'

function About () {
    return (
    <section className = 'container'>
        <h2 class='title'> Paula Preap</h2>
       <hr></hr>
  
         <div>
            <img class='mb-5' id='avatar' src={avatarImage} alt='me'/>
            <p> I am currently enroll in the full stack coding bootcamp program at Michigan State University.
                     Residing in Massachusetts. 
                    I graduated from UMASS Amherst with a degree in Chemistry.
                    My work experiences varies from retail, customer service, biotech, medical device</p>
        </div>
    </section>
    )
}

export default About;