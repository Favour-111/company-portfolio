import React from "react";
import "./Footer.css";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdChevronRight, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="footer-overlay-content">
        <div className="footer-section-2">
          <div className="footer-company-about">
            <div className="footer-about-head">
              <div>
                <img
                  src="https://wosinaglobal.com/wp-content/uploads/2018/11/WOSINA555.png"
                  alt=""
                />
              </div>
              <div>Wosina</div>
            </div>
            <div>
              Our management which is made up of the industry's finest and
              tested practitioners is poised to recreate standards in
              engineering and oil services business. We are committed to
              providing the highest quality of customer tailored services to our
              clientele. Our goal is to radically revolutionize the mode and
              depth of operations in products marketing, civil and
              electromechanical engineering with a view of raising and
              sustaining standards.
            </div>
          </div>
          <div className="footer-links-body">
            <div className="footer-items-header">Quick Links</div>
            <Link className="footer-link-itm">
              <MdChevronRight />
              Home
            </Link>
            <Link className="footer-link-itm">
              <MdChevronRight />
              Contact
            </Link>
            <Link className="footer-link-itm">
              <MdChevronRight />
              our company
            </Link>
            <Link className="footer-link-itm">
              <MdChevronRight />
              service
            </Link>
            <Link className="footer-link-itm">
              <MdChevronRight />
              our career
            </Link>
          </div>
          <div className="footer-links-body">
            <div className="footer-items-header">Socials</div>
            <Link className="footer-link-itm">
              <div>
                <FaSquareFacebook size={13} className="mb-1 me-1" />
              </div>
              FaceBook
            </Link>
            <Link className="footer-link-itm">
              <FaSquareTwitter size={13} className="mb-1 me-1" />
              Twitter
            </Link>
            <Link className="footer-link-itm">
              <FaGooglePlusSquare size={13} className="mb-1 me-1" />
              Google
            </Link>
            <Link className="footer-link-itm">
              <AiFillTikTok className="mb-1 me-1" />
              TikTok
            </Link>
            <Link className="footer-link-itm">
              <FaLinkedin className="mb-1 me-1" />
              linkedIn
            </Link>
          </div>
          <div className="company-info ">
            <div className="footer-items-header">Contact info</div>
            <div className="company-info-items">
              <div className="icn">
                <IoLocationOutline />
              </div>
              <div className="info-itm">
                3RD AVENUE, 32 ROAD, OPP 321 ROAD,
                <br /> OPP 321 ROAD JUNCTION, FESTAC TOWN, LAGOS
              </div>
            </div>
            <div className="company-info-items">
              <div className="icn">
                <MdOutlinePhone />
              </div>
              <div className="info-itm">(+234) 8030443933</div>
            </div>
            <div className="company-info-items">
              <div className="icn">
                <IoMailOutline />
              </div>
              <div className="info-itm">info@wosinaglobal.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite-text">
        Copyright © 2025 Wosinia, All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
