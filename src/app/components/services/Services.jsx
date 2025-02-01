import React, { useState } from "react";
import "../loader.scss";
import "./services.scss";
import { FaAngleRight } from "react-icons/fa";
import { BsCloudHaze2 } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { LiaServerSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { TbDeviceImacCog, TbDevicesCode } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Services = () => {
  const [readMore, setReadMore] = useState("");
  const router = useRouter()

  return (
    <section className="services-main-container" id="services">
      <div className="services-content">
        <motion.div className="upper-content-svc" initial={{ y: 50, opacity: 0 }} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeInOut" }}>
          <h5>SERVICES</h5>
          <h3 className="sub-heading-svc">Elevating Your Business</h3>
          <div className="loader"></div>
          <p id="paragraph-svc">
            Explore how Leven Plus can elevate your digital presence and
            streamline your operations.
          </p>
          <p>
            Our suite of IT services is designed to empower your business and
            drive success.
          </p>
        </motion.div>
        <motion.div className="lower-content-svc" initial={{ y: 50, opacity: 0 }} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeInOut" }}>
          <div className="card-svc cloud-services">
            <motion.div
              className="content-card-svc"
              animate={
                readMore === "cloud" ? { transform: "rotateY(180deg)" } : {}
              }
            >
              <div className="card-back-svc">
                <div className="card-back-content-svc">
                  <div className="card-icon-container-svc">
                    <BsCloudHaze2 className="card-icon-svc" />
                  </div>
                  <div className="card-tittle-svc">Cloud Solutions</div>
                  <div className="card-des-svc">
                    Empower your business with scalable cloud solutions for
                    enhanced efficiency.
                  </div>
                  <button
                    className="card-btn-svc"
                    onClick={() => setReadMore("cloud")}
                  >
                    Read More <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="card-front-svc">
                <div className="none card-tittle-svc cloud-services">
                  Cloud Solutions
                </div>
                <div className="card-des-svc front">
                  Unlock the potential of scalable cloud solutions with Leven
                  Plus. Our cloud services are designed to enhance efficiency
                  and flexibility. Whether you&apos;re a startup looking to scale
                  rapidly or an established enterprise seeking to optimize
                  operations, our cloud solutions empower your business for the
                  digital age. Join us in the cloud and experience a future
                  where your business soars.
                </div>
                <button className="card-btn-svc front font-color-white" onClick={() => router.push("#get-a-free-quote")}>
                  Get a Quote
                  <FaAngleRight />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="card-svc website-and-application-services">
            <motion.div
              className="content-card-svc"
              animate={
                readMore === "web" ? { transform: "rotateY(180deg)" } : {}
              }
            >
              <div className="card-back-svc">
                <div className="card-back-content-svc">
                  <div className="card-icon-container-svc">
                    <TbDevicesCode className="card-icon-svc" />
                  </div>
                  <div className="card-tittle-svc">Web & App Solutions</div>
                  <div className="card-des-svc">
                    Elevate your digital presence with expert Web and App
                    development.
                  </div>
                  <button
                    className="card-btn-svc"
                    onClick={() => setReadMore("web")}
                  >
                    Read More <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="card-front-svc">
                <div className="none card-tittle-svc cloud-services">
                  Web & App Solutions
                </div>
                <div className="card-des-svc front">
                  Elevate your digital presence with Leven Plus&apos;s expert web and
                  app development services. We specialize in creating
                  user-centric, stunning, and high-performance digital
                  solutions. From engaging websites to innovative mobile apps,
                  our team crafts digital experiences that captivate your
                  audience and drive growth. Ready to transform your online
                  presence? Let&apos;s get started.
                </div>
                <button className="card-btn-svc front" onClick={() => router.push("#get-a-free-quote")}>
                  Get a Quote
                  <FaAngleRight />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="card-svc ai-and-ml-services">
            <motion.div
              className="content-card-svc"
              animate={
                readMore === "ai" ? { transform: "rotateY(180deg)" } : {}
              }
            >
              <div className="card-back-svc">
                <div className="card-back-content-svc">
                  <div className="card-icon-container-svc">
                    <RiRobot2Line className="card-icon-svc" />
                  </div>
                  <div className="card-tittle-svc">AI & Machine Learning</div>
                  <div className="card-des-svc">
                    Leverage the power of AI and ML for smarter decisions and
                    innovation.
                  </div>
                  <button
                    className="card-btn-svc"
                    onClick={() => setReadMore("ai")}
                  >
                    Read More <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="card-front-svc">
                <div className="none card-tittle-svc cloud-services">
                  AI & Machine Learning
                </div>
                <div className="card-des-svc front">
                  Experience the future with AI and Machine Learning solutions
                  from Leven Plus. Our AI-powered technologies unlock new
                  possibilities for your business. Harness the power of
                  data-driven insights, automation, and predictive analytics to
                  make smarter decisions and drive innovation. Embrace AI&apos;s
                  transformative potential, and stay ahead of the competition
                  with Leven Plus.
                </div>
                <button className="card-btn-svc front" onClick={() => router.push("#get-a-free-quote")}>
                  Get a Quote
                  <FaAngleRight />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="card-svc cyber-security">
            <motion.div
              className="content-card-svc"
              animate={
                readMore === "security" ? { transform: "rotateY(180deg)" } : {}
              }
            >
              <div className="card-back-svc">
                <div className="card-back-content-svc">
                  <div className="card-icon-container-svc">
                    <GoShieldCheck className="card-icon-svc" />
                  </div>
                  <div className="card-tittle-svc">
                    Cyber Security Solutions
                  </div>
                  <div className="card-des-svc">
                    Protect your digital assets with cutting-edge cyber security
                    expertise.
                  </div>
                  <button
                    className="card-btn-svc"
                    onClick={() => setReadMore("security")}
                  >
                    Read More <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="card-front-svc">
                <div className="none card-tittle-svc cloud-services">
                  Cyber Security Solutions
                </div>
                <div className="card-des-svc front">
                  Protect your digital assets with Leven Plus&apos;s cutting-edge
                  cyber security expertise. In an era of evolving threats, your
                  business deserves the highest level of protection. Our
                  comprehensive security solutions, threat detection, and
                  proactive monitoring shield your data from cyber threats.
                  Don&apos;t leave your digital fortress vulnerable; fortify it with
                  Leven Plus.
                </div>
                <button className="card-btn-svc front" onClick={() => router.push("#get-a-free-quote")}>
                  Get a Quote
                  <FaAngleRight />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="card-svc vps-and-hosting">
            <motion.div
              className="content-card-svc"
              animate={
                readMore === "vps" ? { transform: "rotateY(180deg)" } : {}
              }
            >
              <div className="card-back-svc">
                <div className="card-back-content-svc">
                  <div className="card-icon-container-svc">
                    <LiaServerSolid className="card-icon-svc" />
                  </div>
                  <div className="card-tittle-svc">VPS & Hosting Services</div>
                  <div className="card-des-svc">
                    Reliable hosting and VPS solutions for a seamless online
                    presence.
                  </div>
                  <button
                    className="card-btn-svc"
                    onClick={() => setReadMore("vps")}
                  >
                    Read More <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="card-front-svc">
                <div className="none card-tittle-svc cloud-services">
                  VPS & Hosting Services
                </div>
                <div className="card-des-svc front">
                  Reliability is the cornerstone of our hosting and VPS
                  solutions. Leven Plus ensures your online presence stays
                  uninterrupted and lightning-fast. With our high-performance
                  servers and expert support, your website or application enjoys
                  seamless operation. Whether you&apos;re a startup or an enterprise,
                  trust us to be your hosting partner.
                </div>
                <button className="card-btn-svc front" onClick={() => router.push("#get-a-free-quote")}>
                  Get a Quote
                  <FaAngleRight />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="card-svc it-management">
            <motion.div
              className="content-card-svc"
              animate={
                readMore === "management"
                  ? { transform: "rotateY(180deg)" }
                  : {}
              }
            >
              <div className="card-back-svc">
                <div className="card-back-content-svc">
                  <div className="card-icon-container-svc">
                    <TbDeviceImacCog className="card-icon-svc" />
                  </div>
                  <div className="card-tittle-svc">IT Management Services</div>
                  <div className="card-des-svc">
                    Streamline and optimize your IT infrastructure with expert
                    management.
                  </div>
                  <button
                    className="card-btn-svc"
                    onClick={() => setReadMore("management")}
                  >
                    Read More <FaAngleRight />
                  </button>
                </div>
              </div>
              <div className="card-front-svc">
                <div className="none card-tittle-svc cloud-services">
                  IT Management Services
                </div>
                <div className="card-des-svc front">
                  Streamline and optimize your IT infrastructure with Leven
                  Plus&apos;s expert IT management services. We understand that
                  technology is the backbone of modern businesses. Our team
                  takes the complexity out of IT, ensuring your systems run
                  seamlessly. Focus on your core operations, while we handle IT.
                  Partner with Leven Plus for a more efficient, secure, and
                  agile IT landscape.
                </div>
                <button className="card-btn-svc front" onClick={() => router.push("#get-a-free-quote")}>
                  Get a Quote
                  <FaAngleRight />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
