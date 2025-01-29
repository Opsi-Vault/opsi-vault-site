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
import Button from "../components/button/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

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
                  <Button onClick={() => console.log("Clicked")}>
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hero-image-container">
                <img src="./assets/bg-med.jpg" alt="" />
                <div className="hero-image-content-container">
                  <section className="left-section">
                    <div className="tag">NEWS</div>
                    <h2>Leader In Elite Construction</h2>
                    <p>
                      Our services: service1, service2, service3, service4, and
                      service5
                    </p>
                  </section>
                  <button className="right-section-button"><MdArrowOutward className="top-right-arrow" /></button>
                </div>
              </div>
              <div className="hero-section-card-container">
                <div className="hsc-one">
                  <h3>10</h3>
                  {/* <span className="flex"> */}
                    <p>TEAM MEMBERS</p>
                    <button><MdArrowOutward /></button>
                  {/* </span> */}
                </div>
                <div className="hsc-two">
                  <h3>49K</h3>
                  <p>M2 TO BUILT</p>
                  <button>RELIABLE</button>
                </div>
                <div className="hsc-three">
                  <h3>256M</h3>
                  <p>PORTFOLIO VALUE</p>
                </div>
              </div>
            </section>
            {/* There are each single pages for the following component which will be designed shortly */}
            <AboutUs />
            <Services />
            {/* <Counter /> */}
            {/* <Projects /> */}
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
