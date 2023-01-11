import React from 'react';



function ConfirmedBooking( param ) {

    console.log(param.data)

    return(
        <>
        <div className="section-menu">
            <div className="top-sub-header">&nbsp;</div>
                <div className="container">
                    <h3>Your Reservations have been confirmed</h3>

                    <p>Please contact the restaurant if you need to change or cancel your reservations.</p>
                </div>
        </div>
        </>
    )
  }



export default ConfirmedBooking;

