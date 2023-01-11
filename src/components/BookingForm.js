import React, {useState} from 'react';
import * as Yup from "yup";
import { useFormik} from "formik";
import {fetchAPI, submitAPI} from '../api';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
  } from "@chakra-ui/react";
  import { Navigate } from "react-router-dom";




function BookingForm(){


    const todayDate = new Date();
    const yyyy = todayDate.getFullYear();
    const mm = todayDate.getMonth() < 9 ? "0" + (todayDate.getMonth() + 1) : (todayDate.getMonth() + 1); // getMonth() is zero-based
    const dd = todayDate.getDate();
    const sDate = mm.toString() + dd.toString() + yyyy.toString();
    const todaysDate = yyyy.toString() + "-"+ mm.toString() + "-" + dd.toString()

    const [date, setDate] = useState(todaysDate);
    const[time, setTime] = useState(fetchAPI(sDate));
    const [confirm, setConfirm] = useState(false);

    let showAvailableDates = fetchAPI(sDate) ;


    const formik = useFormik({
        initialValues: {
            name: '',
            date: todaysDate,
            time: showAvailableDates[0],
            numOfGuest: 1,
            occasion: 'Birthday'
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is a Required Field"),

            }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));

           const formSubmit = submitAPI(values);

           if(formSubmit){
                setConfirm(true);
           }
        }
      });

      if(confirm){
        return (
            <Navigate
              to={{
                pathname: "/confirmation",
              }}
            />
          );
      }



    const handleChange = (event) => {
        let dateValue = event.target.value;
        dateValue = dateValue.split("-");

        const dateYear = dateValue[0];
        const dateMonth = dateValue[1];
        const dateDay = dateValue[2];

        const dateCombo =  dateMonth.toString() + dateDay.toString() + dateYear.toString();

        setDate(event.target.value)

       showAvailableDates = fetchAPI(dateCombo) ;
        alert(showAvailableDates);

       setTime(showAvailableDates)
    }

 



    return(

        <div className='booking-form'>


            <form onSubmit={formik.handleSubmit}>
                <div className="booking-form-input">
                    <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                        id="name"
                        name="name"
                        type="text"
                        {...formik.getFieldProps("name")}
                        />
                        <FormErrorMessage className="error-message">{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                </div>

               <div className="booking-form-input">
                    <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                        <FormLabel htmlFor="date">Date</FormLabel>
                        <Input
                        type="date"
                        id="date"
                        name="date"
                        placeholder="Enter the Date"
                        min={todaysDate}
                        onChange={handleChange}
                        value={date}
                        />
                        <FormErrorMessage className="error-message">{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                </div>

               <div className="booking-form-input time-section">

                    <FormControl>
                        <FormLabel htmlFor="time">Available Time:</FormLabel>
                        <Select id="time" name="time">
                            {time.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </Select>
                        <FormErrorMessage className="error-message">{formik.errors.time}</FormErrorMessage>
                    </FormControl>

                    {/* <div className="time-grid">
                        <div className="grid-item">3:00 pm</div>
                        <div className="grid-item">3:30 pm</div>
                        <div className="grid-item">4:00 pm</div>
                        <div className="grid-item">4:30 pm</div>
                        <div className="grid-item">5:00 pm</div>
                        <div className="grid-item">5:30 pm</div>
                        <div className="grid-item">6:00 pm</div>
                        <div className="grid-item">6:30 pm</div>
                        <div className="grid-item">7:00 pm</div>
                        <div className="grid-item">7:30 pm</div>
                        <div className="grid-item">8:00 pm</div>
                        <div className="grid-item">8:30 pm</div>
                        <div className="grid-item">9:00 pm</div>
                        <div className="grid-item">9:30 pm</div>
                        <div className="grid-item">10:00 pm</div>
                        <div className="grid-item">10:30 pm</div>
                    </div> */}

                </div>

                <div className="booking-form-input">
                    <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                        <FormLabel htmlFor="date">Number of Guests:</FormLabel>
                        <Input
                        type="number"
                        id="numOfGuest"
                        name="numOfGuest"
                        placeholder="1"
                        min="1"
                        max="10"
                        {...formik.getFieldProps("numOfGuest")}
                        />
                        <FormErrorMessage className="error-message">{formik.errors.numOfGuest}</FormErrorMessage>
                    </FormControl>
                </div>

                <div className="booking-form-input">
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion:</FormLabel>
                        <Select id="occasion" name="type">
                            <option value="birthday">Birthday</option>
                            <option value="dinner">Dinner</option>
                            <option value="lunch">Lunch</option>
                            <option value="wedding">Wedding</option>
                            <option value="anniversary">Anniversary</option>
                        </Select>
                        <FormErrorMessage className="error-message">{formik.errors.occasion}</FormErrorMessage>
                    </FormControl>
                </div>

                <div className="button-section">
                <Button type="submit">Submit</Button>

                    <Button className="cancel-button" >Cancel</Button>
                </div>
            </form>


        </div>
    )
}

export default BookingForm;