import React from 'react';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

class Main extends React.Component {
    render(){
        return(
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
        )
    }
}

export default Main