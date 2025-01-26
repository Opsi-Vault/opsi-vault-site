"use client";

import "./home.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
// import Counter from "./components/counter/counter";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact-us/ContactUs";
import Loader from "../components/loader/Loader";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  });
  return (
    <>
      {!loading ? (
        <main className="main-container">
          <div className="wrapper-container">
            <Header />
            <section className="hero-section">
              <div className="hero-section-upper-container">
                <h1>YOUR FUTURE, OUR MISSION</h1>
                <div>
                  <h3>Exceeding Standards In Elite Construction</h3>
                  <button>Learn More</button>
                </div>
              </div>
              <div className="image-container">
                <div className="image-content-container"></div>
              </div>
              <div className="hero-section-card-container"></div>
            </section>
            {/* There are each single pages for the following component which will be designed shortly */}
            <AboutUs />
            <Services />
            {/* <Counter /> */}
            <Projects />
            <Contact />
            {/* <Testimonials/> */}
            <Footer />
          </div>
        </main>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
}
