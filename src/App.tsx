import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeUserLoginScreen from "./pages/HomeUserLoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import FlightsScreen from "./pages/FlightsScreen";
import ConfirmationScreen from "./pages/ConfirmationScreen";
import ReservationScreen from "./pages/ReservationScreen";
import ReservationsScreen from "./pages/ReservationsScreen";
import ForgotScreen from "./pages/ForgotScreen";
import AdminScreen from "./pages/AdminScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register-screen":
        title = "";
        metaDescription = "";
        break;
      case "/flights-screen":
        title = "";
        metaDescription = "";
        break;
      case "/confirmation-screen":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-screen":
        title = "";
        metaDescription = "";
        break;
      case "/reservations-screen":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-screen":
        title = "";
        metaDescription = "";
        break;
      case "/admin-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeUserLoginScreen />} />
      <Route path="/register-screen" element={<RegisterScreen />} />
      <Route path="/flights-screen" element={<FlightsScreen />} />
      <Route path="/confirmation-screen" element={<ConfirmationScreen />} />
      <Route path="/reservation-screen" element={<ReservationScreen />} />
      <Route path="/reservations-screen" element={<ReservationsScreen />} />
      <Route path="/forgot-screen" element={<ForgotScreen />} />
      <Route path="/admin-screen" element={<AdminScreen />} />
    </Routes>
  );
}
export default App;
