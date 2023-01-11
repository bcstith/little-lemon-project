
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/menu", element: <Menu /> },
    { path: "/reservations", element: <BookingPage /> },
    { path: "/confirmation", element: <ConfirmedBooking /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return(
    <Router>
      <Header />
        <Nav />
        <App />
      <Footer />
    </Router>
  )
}


export default AppWrapper;
