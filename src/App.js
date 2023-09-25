import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./index.css";
import "./media.css";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import VarifyPhone from "./pages/varifyPhone/index.jsx";
import VarificationPin from "./pages/VarificationPin/index.jsx";
import Farward from "./pages/Farward/index";
import AboutUS from "./pages/aboutus/index";
import ContactUS from "./pages/contactus/index";
import AppointMents from "./pages/Appointments/index";
import BookingConfirmation from "./pages/BookingConfirmation/index";
import SallonPaymentCard from "./pages/SallonPaymentCard";
import OurPriecing from "./pages/OurPriecing/index";
import BookAppointment from "./pages/BookAppointment";
import SaloonReviews from "./pages/SaloonReviews";
import Features from "./pages/Features";
import Saloons from "./pages/Saloons/index";
import ProductList from "./pages/ProductList";
import Products from "./pages/products";
import SaloonsByCategory from "./pages/SaloonsBYCategories/index";
import SaloonsByCategoryByDate from "./pages/SaloonByCategoryByDate/index";
import StaffDetail from "./Componet/StaffDetail";


import ProductDetails from "./pages/ProductDetails/index";

import ACTIONS from "./store/actions/index";
import { useSelector, useDispatch } from "react-redux";
import LandingPage from "./api/landingPage";
import CartApi from "./api/cart";

import Profile from "./pages/Profile";
import { Forgot } from "./pages/Forgot";

import StripeContainer from "./pages/checkout/StripeContainer";
import SaloonList from "./pages/saloonsbycategory";
import SaloonListServices from "./pages/saloonbyservices";
import AuthApi from "./api/authApi";

import PartnerHome from "./pages/PartnerHome";
import Careers from "./pages/Careers";

import AOS from "aos";
import saloonsbycategory from "./pages/saloonsbycategory";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Favourite from "./pages/Favourite";
import { gapi } from "gapi-script"
// import "aos/dist/aos.css";

// AOS.init({
//   disable: function() {
//     var maxWidth = 800;
//     return window.innerWidth < maxWidth;
//   }
// });
const clientId = "760680645403-mrvuaie01oo3juglh17qbhms57f5gb7j.apps.googleusercontent.com"
function App(props) {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      })
    }
    gapi.load("client", start);

  })
  // var accessToken = gapi.auth.getToken().access_token;
  // ("current user token:",accessToken)
  let dispatch = useDispatch();
  useEffect(() => {
    getCategories();
    getSaloons();
    if (localStorage.getItem("token")) {
      CartApiData();
      getCustomer();
    }
    getLocation();
  }, []);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        ACTIONS.getLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    });
  };
  const getSaloons = () => {
    LandingPage.saloonsList().then((res) => {
      if (res.data.Error == false) {
        dispatch(ACTIONS.saloon_list(res.data));
      }
    });
  };
  const getCategories = () => {
    ("Categories list");

    LandingPage.getcategories().then((res) => {
      dispatch(ACTIONS.getcategories(res.data));
    });
  };
  const getCustomer = () => {
    AuthApi.getCustomerDetail().then((res) => {
      if (res.data.Error == false) {
        dispatch(ACTIONS.CustomerDetail(res.data.Data));
      } else if (res.data.token == false) {

        localStorage.removeItem("token");
        props.history.push("/");
      }
    });
  };

  const CartApiData = () => {
    let totalquantity = 0;
    CartApi.getCart().then((res) => {
      if (res.data.Data) {
        if (res.data.Data.Products != null) {
          res.data.Data.Products.map((data) => {
            let product = data.Product;
            product.quantity = data.Quantity;
            totalquantity += data.Quantity;
            dispatch(ACTIONS.addCart({ product, totalquantity }));
          });
        }

        let data = {
          Saloon: res.data.Data.Saloon,
          Services: res.data.Data.Services,
          Staff: res.data.Data.Staff,
          Appointment_Date: res.data.Data.Appointment_Date,
          Time_Slot: res.data.Data.Time_Slot,
        };
        if (res.data.Data.Services.length > 0) {
          dispatch(ACTIONS.addServices(data));
        }
      }
    });
  };
  return (
    <>
      <div>
        {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul> */}
      </div>
      <Switch>
        Home page
        <Route exact path="/" component={Home} />
        <Route exact path="/partner-home" component={PartnerHome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup/:user" component={Signup} />
        {/* <Route exact path="/varifyPhone" component={VarifyPhone} /> */}
        <Route exact path="/varifiy_pin/:user" component={VarificationPin} />
        <Route exact path="/saloons" component={Saloons} />
        <Route exact path="/saloons/:category" component={SaloonsByCategory} />
        <Route
          exact
          path="/saloons/:category/:date"
          component={SaloonsByCategoryByDate}
        />
        <Route exact path="/Our-Prices" component={OurPriecing} />
        <Route exact path="/select-role" component={Farward} />
        <Route exact path="/aboutus" component={AboutUS} />
        <Route exact path="/contactus" component={ContactUS} />
        <Route exact path="/appointments" component={AppointMents} />
        <Route exact path="/bookinginfo" component={BookingConfirmation} />
        <Route exact path="/paymentcard" component={SallonPaymentCard} />
        <Route exact path="/bookappointment" component={BookAppointment} />
        <Route exact path="/saloon/:slug" component={SaloonReviews} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/forget" component={VarifyPhone} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/staff-detail/:id" component={StaffDetail}></Route>
        {/* Test */}
        <Route exact path="/checkouttest" component={StripeContainer} />
        {/* Test */}
        <Route exact path="/update-password" component={Forgot} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/saloons_list/:id" component={SaloonList} />
        <Route
          exact
          path="/services_saloons_list/:id"
          component={SaloonListServices}
        />
        <Route exact path="/products_list/:id" component={ProductList} />
        <Route exact path="/favourites" component={Favourite} />
        <Route exact path="/product_details/:id" component={ProductDetails} />
        {/* <Route
          component={() => {
            return <div>404 page not found</div>;
          }}
        /> */}
      </Switch>
    </>
  );
}

export default withRouter(App);
