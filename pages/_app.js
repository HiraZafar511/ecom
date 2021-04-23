import 'bootstrap/dist/css/bootstrap.css'
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/configureStore";
import "../public/css/layout.css"
import "../public/css/home.css"
import '../public/css/sc.scss';
import "../public/css/side.css"
import "../public/css/dashboard.css"
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";


function MyApp({ Component, pageProps }) {
  return (
   
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
   
  );
}

export default MyApp;
