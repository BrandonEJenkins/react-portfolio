import React from 'react';

import Hero from '../components/Hero.component';
import CardCarousel from '../components/CardCarousel.component';

function HomePage(props) {

    return(
        <div>
            
            <Hero title={ props.title } subTitle={props.subTitle} text={props.text}/>
            <CardCarousel />

        </div>
    );
}

export default HomePage;