import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Home.css";
import { HiOutlineShieldCheck } from "react-icons/hi";
import backimg from "../../assets/images/—Pngtree—creative vector dotted line dotted_6030768.png";
import aboutImg from "../../assets/images/1a476816-57b1-4c0f-a15f-855192b99d2c.png";
import { GiGasPump, GiWorld } from "react-icons/gi";
import { PiBrainLight } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TfiBlackboard } from "react-icons/tfi";
import { GoArrowRight } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { IoMegaphoneOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import Footer from "../../Components/Footer/Footer";
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // ✅ Enable auto-scrolling
    autoplaySpeed: 3000, // ✅ Wait for 3 seconds before scrolling
    pauseOnHover: true, // ✅ Pause if user hovers
    pauseOnFocus: true, // ✅ Pause if user interacts

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          className: "center",
          centerPadding: "0",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Nav />
      <div className="home-banner-container">
        <div className="container1">
          <div className="container-headersm">our service</div>
          <div className="container-headerBG">
            We drive growth, lead in oil and gas, and excel in engineering
          </div>
          <div className="container-content">
            we strive to fulfill the expectations of our clients by
            understanding their business processes
          </div>
          <div className="button-group">
            <button className="Read-More">Read more</button>
            <button className="contact-button">Contact us</button>
          </div>
          <div className="trusted-text">
            <div>
              <HiOutlineShieldCheck className="mb-1" color="green" />
            </div>
            <div>Trusted Company since 2006</div>
          </div>
        </div>
        <div className="image-container-content">
          <img
            src="https://images.unsplash.com/photo-1604071334368-bb3cb256180b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="text-on-image shadow">
            <div className="text-head">Trusted</div>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="text1">oil & gas</div>
              <div className="percentage">100%</div>
            </div>
          </div>
          <div className="text-on-image2 shadow">
            <div className="text-head">Trusted</div>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="text1">Engineering</div>
              <div className="percentage">100%</div>
            </div>
          </div>
          <div className="blob1">
            <img src={backimg} alt="" />
          </div>
          <div className="blob2">
            <img src={backimg} alt="" />
          </div>
        </div>
      </div>
      <div className="reason-sections">
        <div className="reason-head">Why chooses us ?</div>
        <div className="reason-head-main">
          Top Reasons why you should choose us
        </div>
        <div className="reason-container">
          <div className="reason-items">
            <div className="reason-icon">
              <GiWorld size={30} />
            </div>
            <div className="reason-container-head">A Global Network</div>
            <div className="reason-container-content">
              That empathy of business ownership creates the relationship they
              required to actually make a difference.
            </div>
          </div>
          <div className="reason-items">
            <div className="reason-icon">
              <PiBrainLight size={30} />
            </div>
            <div className="reason-container-head">
              Commitment to Innovation
            </div>
            <div className="reason-container-content">
              Over 20 years we have been advising a diverse range of businesses
              on how they can find a competitive advantage.
            </div>
          </div>
          <div className="reason-items">
            <div className="reason-icon">
              <FaRegHandshake size={30} />
            </div>
            <div className="reason-container-head">
              Building Trusted Partnership
            </div>
            <div className="reason-container-content">
              We partner with clients to put recommendations into practice and
              work directly with them over the long-term.
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-content-container">
          <div className="about-us-sub-head">About us</div>
          <div className="about-us-head">
            Driven by Expertise, Powered by Innovation
          </div>
          <div className="about-us-content">
            Gas industry. It specializes in procurement, logistics, engineering,
            fabrication, construction, and the import/export of petroleum
            products such as AGO, LPFO, PMS, and DPK. Its mission is to
            consistently meet client expectations by delivering tailored
            products and services.
          </div>
          <button className="About-us-button mt-5">Know More</button>
        </div>
        <div className="about-us-image-container">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-sub-head">Testimonial Design</div>
        <div className="testimonial-head">
          Some of our awesome testimonials{" "}
        </div>
        <div className="testimonial-item-container">
          <Slider {...settings}>
            <div className="testimonial-item mx-2">
              <div className="star">
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
              </div>
              <div className="testimonial-content">
                "Super help to Praesent faucibus risus a ex venenatis, vel
                posuere elit porta."
              </div>
              <div className="profile-content-testimonial">
                <div className="profile-testimonial-image">
                  <img
                    src="https://easetemplate.com/borrow/assets/images/avatar/avatar-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="profile-name">Charles</div>
                  <div className="profile-mail">Charles@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="testimonial-item mx-2">
              <div className="star">
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
              </div>
              <div className="testimonial-content">
                "Super help to Praesent faucibus risus a ex venenatis, vel
                posuere elit porta."
              </div>
              <div className="profile-content-testimonial">
                <div className="profile-testimonial-image">
                  <img
                    src="https://easetemplate.com/borrow/assets/images/avatar/avatar-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="profile-name">Charles</div>
                  <div className="profile-mail">Charles@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="testimonial-item mx-2">
              <div className="star">
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
              </div>
              <div className="testimonial-content">
                "Super help to Praesent faucibus risus a ex venenatis, vel
                posuere elit porta."
              </div>
              <div className="profile-content-testimonial">
                <div className="profile-testimonial-image">
                  <img
                    src="https://easetemplate.com/borrow/assets/images/avatar/avatar-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="profile-name">Charles</div>
                  <div className="profile-mail">Charles@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="testimonial-item mx-2">
              <div className="star">
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
                <div className="star-itm">
                  <TiStarFullOutline />
                </div>
              </div>
              <div className="testimonial-content">
                "Super help to Praesent faucibus risus a ex venenatis, vel
                posuere elit porta."
              </div>
              <div className="profile-content-testimonial">
                <div className="profile-testimonial-image">
                  <img
                    src="https://easetemplate.com/borrow/assets/images/avatar/avatar-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="profile-name">Charles</div>
                  <div className="profile-mail">Charles@gmail.com</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="sponsors-container shadow-sm">
        <div className="sponsor-items">
          <img
            src="https://www.wosinaglobal.com/wp-content/uploads/2018/11/shell-logo-100x100.jpg"
            alt=""
          />
        </div>
        <div className="sponsor-items">
          <img
            src="https://www.wosinaglobal.com/wp-content/uploads/2018/11/airtel-logo-100x100.jpg"
            alt=""
          />
        </div>
        <div className="sponsor-items">
          <img
            src="https://www.wosinaglobal.com/wp-content/uploads/2018/11/Huawei-Logo-200x200-100x100.png"
            alt=""
          />
        </div>
        <div className="sponsor-items">
          <img
            src="https://www.wosinaglobal.com/wp-content/uploads/2018/11/juliusbergerlogo-100x100.jpg"
            alt=""
          />
        </div>
        <div className="sponsor-items">
          <img
            src="https://www.wosinaglobal.com/wp-content/uploads/2018/11/mobile-logo-100x100.jpg"
            alt=""
          />
        </div>
        <div className="sponsor-items">
          <img
            src="https://www.wosinaglobal.com/wp-content/uploads/2018/11/MTN-logo-200x200-100x100.png"
            alt=""
          />
        </div>
      </div>
      <div className="offer-container">
        <div className="offer-head">Service we provide</div>
        <div className="offer-Subhead">Wosina global resources</div>
        <div className="offer-items-container">
          <div className="offer-item">
            <div className="offer-icon">
              <BsGraphUpArrow />
            </div>
            <div className="offer-itm-head">Oil & Gas</div>
            <div className="offer-content">
              One of Nigerians largest and fastest growing oil company{" "}
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link className="Read-Link">Read More</Link>
              <GoArrowRight />
            </div>
          </div>
          <div className="offer-item">
            <div className="offer-icon">
              <LiaTruckLoadingSolid />
            </div>
            <div className="offer-itm-head">Logistics</div>
            <div className="offer-content">
              New trucks pushes Operation dept to meet future need
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link className="Read-Link">Read More</Link>
              <GoArrowRight />
            </div>
          </div>
          <div className="offer-item">
            <div className="offer-icon">
              <IoMegaphoneOutline />
            </div>
            <div className="offer-itm-head">Engineering</div>
            <div className="offer-content">
              Our continued growth has been based on repeated business from
              satisfied Clients
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link className="Read-Link">Read More</Link>
              <GoArrowRight />
            </div>
          </div>
          <div className="offer-item">
            <div className="offer-icon">
              <RiCustomerService2Fill />
            </div>
            <div className="offer-itm-head">Telecommunication</div>
            <div className="offer-content">
              Telecommunications Our broad network with key influencers, We
              provide telecoms services.
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link className="Read-Link">Read More</Link>
              <GoArrowRight />
            </div>
          </div>
          <div className="offer-item">
            <div className="offer-icon">
              <IoPaperPlaneOutline />
            </div>
            <div className="offer-itm-head">Import & Export</div>
            <div className="offer-content">
              Import & Export our robust teams of trained staff and up industry
              standard equipment
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link className="Read-Link">Read More</Link>
              <GoArrowRight />
            </div>
          </div>
          <div className="offer-item">
            <div className="offer-icon">
              <GrUserManager />
            </div>
            <div className="offer-itm-head">Facilities Management</div>
            <div className="offer-content">
              Our continued growth has been based on repeated business from
              satisfied Clients
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <Link className="Read-Link">Read More</Link>
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
