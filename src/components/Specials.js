import React from 'react';


function Specials(){
    return (
        <>
        <div className="main-header-section">
                    <div className="top-grid-container container">
                        <div className='grid-item header-column'>
                            <h1>Little Lemon</h1>
                            <h3>Chicago</h3>

                            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes
                                served with a modern twist.  </p>

                             <button>Reserve a Table</button>
                        </div>
                        <div className='grid-item image-column'>
                            <img src="images/main-image.JPG" alt="Little Lemon" className="responsive"/>
                        </div>


                    </div>
                </div>
                <div className="middle-grid-container container">
                    <div className='grid-item'><h1>This weeks specials!</h1></div>
                    <div className='grid-item'><button>Online Menu</button></div>
                </div>


                <div className="container">
                    <div className="card-container">
                        <div className="card">
                            <div className="card-image"><img src="images/salad-image.png" alt=""/></div>
                            <div className="card-main">
                                <div className="card-title">
                                    <div className='grid-item'><h3>Greek Salad</h3></div>
                                    <div className='grid-item price'><span>$12.99</span></div>
                                </div>
                                <div className="card-description">
                                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image"><img src="images/bruchetta-image.png" alt=""/></div>
                            <div className="card-main">
                                <div className="card-title">
                                    <div className='grid-item'><h3>Bruchetta</h3></div>
                                    <div className='grid-item price'><span>$5.99</span></div>
                                </div>
                                <div className="card-description">
                                    <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                        <div className="card-image"><img src="images/lemon-cake.png" alt=""/></div>
                            <div className="card-main">
                                <div className="card-title">
                                    <div className='grid-item'><h3>Lemon Dessert</h3></div>
                                    <div className='grid-item price'><span>$5.00</span></div>
                                </div>
                                <div className="card-description">
                                    <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Specials;