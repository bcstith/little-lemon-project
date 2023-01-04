import React from 'react'

function About(){
    return(
        <>
            <div className="about-section">
                    <div className="container">
                        <h1>About Us</h1>

                        <div className="about-grid">
                            <div className="grid-item"><p>As one of the first restaurants on Chicago's famed Restaurant Row in the West Loop, Little Lemon restaurant began in 2010 with a goal of serving bold, global flavors to our local community (and visitors!). Since then, our desire to treat guests like family has remained the same (as have our Green Beans) - but our seasonal flavors, cocktails, wine and locally-rooted beer are ever-changing.</p></div>

                            <div className="grid-item">
                                <img src="images/about-image.jpg" alt=""/>
                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default About;