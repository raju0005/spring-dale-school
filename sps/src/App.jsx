import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import ScrollReveal from "scrollreveal";

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      easing: "ease-in-out",
      reset: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <ContactForm />

      <Contact />
    </>
  );
};

export default App;
