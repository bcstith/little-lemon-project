import React from 'react';

function Testimonials(){

    return(
        <>
            <div className="container">
                <div className="section-header"><h1>Testimonials</h1></div>

                <div className="card-testimonials-container">
                    <div className="card-testimonials">
                            <div className="image-testimonials"><img src="images/headshot-1.png" alt="" class="avatar"/><h3>Sarah</h3></div>
                            <div className="card-testimonials-main">
                                <div className="testimonials-rating">
                                    <h3>Ratings: 
                                        <span className="review-star">
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                        </span>
                                    </h3>
                                </div>
                                <div className="card-testimonials-description">
                                    <p><imge src="images/quote-left.png" alt="" class="quote-image"/> The greek salad was amazing!! The service was also great and very fast. <imge src="images/quote-right.png" alt="" class="quote-image"/></p>
                                </div>
                            </div>
                    </div>


                    <div className="card-testimonials">
                            <div className="image-testimonials"><img src="images/headshot-2.jpg" alt="" class="avatar"/><h3>Thomas</h3></div>
                            <div className="card-testimonials-main">
                                <div className="testimonials-rating">
                                    <h3>Ratings: 
                                        <span className="review-star">
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                        </span>
                                    </h3>
                                </div>
                                <div className="card-testimonials-description">
                                    <p><imge src="images/quote-left.png" alt="" class="quote-image"/> I was not impressed with the food and the service was very slow and rude. <imge src="images/quote-right.png" alt="" class="quote-image"/></p>
                                </div>
                            </div>
                    </div>


                    <div className="card-testimonials">
                            <div className="image-testimonials"><img src="images/headshot-3.jpg" alt="" class="avatar"/><h3>Maria</h3></div>
                            <div className="card-testimonials-main">
                                <div className="testimonials-rating">
                                    <h3>Ratings: 
                                        <span className="review-star">
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                            <img src="images/review-stars.png" alt="" class="review-star-image"/>
                                        </span>
                                    </h3>
                                </div>
                                <div className="card-testimonials-description">
                                    <p><imge src="images/quote-left.png" alt="" class="quote-image"/> I really enjoyed my experience at the restaurant. <imge src="images/quote-right.png" alt="" class="quote-image"/></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Testimonials;