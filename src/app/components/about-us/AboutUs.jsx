import React from "react";
import "../loader.scss"
import "./aboutUs.scss"
import { MdOutlineWeb } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import {motion} from "framer-motion"

const AboutUs = () => {
  const router = useRouter();
  return (
    <section className="about-us-main-contianer" id="about-us">
      <div className="about-us-content">
        <motion.div className="left-content-au" initial={{ y: 50, opacity: 0 }} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeInOut" }}>
          {/* <ul>
            <li>
              <span className="icon">
                <BsGlobe2 />
              </span>
              <div className="lau-content">
                <h2>IT Consultancy</h2>
                <p>
                  Your strategic technology partner for expert guidance and
                  solutions tailored to your business objectives.
                </p>
              </div>
            </li>
            <li>
              <span className="icon">
                <MdOutlineWeb />
              </span>
              <div className="lau-content">
                <h2>Web Development</h2>
                <p>
                  Crafting elegant and functional websites that reflect your
                  brand and drive online success.
                </p>
              </div>
            </li>
            <li>
              <span className="icon">
                <IoCloudUploadOutline />
              </span>
              <div className="lau-content">
                <h2>Cloud Services</h2>
                <p>
                  Unlocking the power of cloud technology to enhance
                  scalability, security, and efficiency for your operations.
                </p>
                <button className="lau-content-button" onClick={() => router.push("#get-a-free-quote")}>
                  Get Started <FaAngleRight />
                </button>
              </div>
            </li>
          </ul> */}
        </motion.div>
        <motion.div className="right-content-au" initial={{ y: 50, opacity: 0 }} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeInOut" }}>
          <h5>ABOUT OPSI VAULT</h5>
          <h3 className="rau-sub-heading">
            Helping Enterprises <span>Configure</span> & Enhance Their IT
            Advisory
          </h3>
          <div className="loader"></div>
          <p className="rau-content">
            At Opsi Vault, we&apos;re passionate about staying at the forefront of
            technology trends. We merge creativity and technical expertise to
            provide tailored solutions that bring your digital vision to life.
            Whether it&apos;s web development, IT consultancy, or cloud services,
            we&apos;re here to transform your tech aspirations into reality.
          </p>
          <p className="rau-note">
            At Opsi Vault, we&apos;re more than IT experts; we&apos;re your partners in
            innovation. Let&apos;s transform your tech aspirations into reality. Join
            us on a remarkable tech journey.
          </p>
          <div className="rau-signature">
            {/* <img src="" alt="" /> */}
            <h2>Darshan Patel</h2>
            <p>Co-Founder & CEO</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
