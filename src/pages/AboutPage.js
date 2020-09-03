import React from 'react';

import Hero from '../components/Hero.component';
import Content from '../components/Content.component';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>
                Hello there!  My name is Brandon Jenkins, I'm a Full-Stack Engineer with experience in MongoDB, MySql, Express JS, React, and Node JS.
            </p>
            <p>
                I'm an active developer based in the DC, Maryland, Virginia area, who loves to create highly interactive and dynamic web applications!
            </p>
            <p>
                After spending 10 years working as a Petroleum Engineer, I decided it's time for a change.  I made the deliberate decision to hit reset on my career, and transition to an exciting sector that offers its engineers technical depth and versatility.
            </p>
            </Content>
        </div>
    );
}

export default AboutPage;