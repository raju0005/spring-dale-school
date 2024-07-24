import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Academics from "./pages/Academics.jsx";
import Admissions from "./pages/Admissions.jsx";
import Faculty from "./pages/Faculty.jsx";
import Students from "./pages/Students.jsx";
import Gallery from "./pages/Gallery.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/students" element={<Students />} />
      <Route path="/gallery" element={<Gallery />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
