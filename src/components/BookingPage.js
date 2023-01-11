import React from 'react';
import BookingForm from './BookingForm';


class BookingPage extends React.Component {
    render(){
        return(
            <>
            <div className="section-menu">
                <div className="top-sub-header">&nbsp;</div>
                    <div className="container">
                        <h1>Make Your Reservations</h1>

                        <BookingForm />

                    </div>
            </div>
            </>
        )
    }

}

export default BookingPage;