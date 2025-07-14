import React, { useState } from "react";
import "./Nav.css";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowRoundForward,
  IoLogoGoogleplus,
  IoLogoTwitter,
} from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdCancel, MdChevronRight, MdOutlineAvTimer } from "react-icons/md";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaAngleDown, FaFacebookF } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { BiLogoPinterest } from "react-icons/bi";

const Nav = () => {
  const handleMouseEnter = () => setNavIsOpen(true);
  const handleMouseLeave = () => setNavIsOpen(false);

  const [navIsOpen, setNavIsOpen] = useState(false);
  const [subNav, setSubNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div>
      <div className="top-bar">
        <div>Wosina GLobal Resources limited</div>
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <GiWorld />
            <div>Location</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <SlLocationPin />
            <div>VIKO INTN’L LTD PLACE BENIN-AUCHI ROAD,EYEAN QUARTERS</div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <FiPhoneCall />
            <div> (234) 8030443933</div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <MdOutlineAvTimer />
            <div> Mon - Fri: 8.0 to 17.00</div>
          </div>
        </div>
      </div>
      <div className="nav-container shadow-sm">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div>
            <img
              className="logo"
              src="https://wosinaglobal.com/wp-content/uploads/2018/11/WOSINA555.png"
              alt=""
            />
          </div>
        </div>
        <div className="navigation-list-items">
          <ul>
            <Link className="Nav-Link">
              <li>Home</li>
            </Link>
            {/* <li
              className="position-relative"
              onMouseOver={() => setDropDown(true)}
              onMouseOut={() => setDropDown(false)}
            >
              Parts <IoIosArrowDown size={15} />
              <ul className={`sub-body-bg shadow-sm ${dropDown ? "open" : ""}`}>
                <div className="sub-bg">
                  <li className="dropdown-item-lg ">
                    <div>Boat Parts</div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                  <li className="dropdown-item-lg ">
                    <div>Anchor & Oars</div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                  <li className="dropdown-item-lg ">
                    <div>Request Item </div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                </div>
              </ul>
            </li> */}
            <Link className="Nav-Link">
              {" "}
              <li>Our Company</li>
            </Link>
            <Link className="Nav-Link">
              <li>Service</li>
            </Link>
            <Link className="Nav-Link">
              <li>Our Career</li>
            </Link>
            <Link className="Nav-Link">
              <li>Contact</li>
            </Link>
            <li className="d-flex align-items-center gap-3 mb-1">
              <div className="logo-Link">
                {" "}
                <FaFacebookF />
              </div>
              <div className="logo-Link">
                {" "}
                <IoLogoTwitter />
              </div>
              <div className="logo-Link">
                <IoLogoGoogleplus />
              </div>
              <div className="logo-Link">
                <BiLogoPinterest />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-sm-cont shadow-sm">
        <div className="logo-cont">
          <img
            className="logo-sm"
            src="https://wosinaglobal.com/wp-content/uploads/2018/11/WOSINA555.png"
            alt=""
          />
        </div>
        {navIsOpen ? (
          <div className="hamburger" onClick={() => setNavIsOpen(false)}>
            <IoCloseOutline />
          </div>
        ) : (
          <div className="hamburger" onClick={() => setNavIsOpen(true)}>
            <RxHamburgerMenu />
          </div>
        )}
      </div>
      {navIsOpen && <div className="background-overflow"></div>}
      <div
        className={`shadow-sm nav-sm-container ${navIsOpen ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <ul className="Nav-link">
            <li>
              <Link className="Link">Home</Link>
              <MdChevronRight color="#787878" size={20} />
            </li>
            {/* <li onClick={() => setSubNav(!subNav)}>
              <div className="d-flex align-items-center justify-content-between">
                <Link className="Link">AutoParts</Link>
                <IoIosArrowRoundForward
                  className={`Arrows ${subNav ? "open" : ""}`}
                />
              </div>
              <ul className="sub-body">
                <div
                  className={`ms-2  d-flex sub-body-item ${
                    subNav ? "open" : ""
                  }`}
                >
                  <li className="dropdown-item-lg ">
                    <div>Audi</div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                  <li className="dropdown-item-lg ">
                    <div>BMW</div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                  <li className="dropdown-item-lg ">
                    <div>Mercedes benz</div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                  <li className="dropdown-item-lg ">
                    <div>Toyota</div>
                    <div>
                      <IoIosArrowForward className="text-light" />
                    </div>
                  </li>
                </div>
              </ul>
            </li> */}
            <li>
              <Link className="Link">our company</Link>
              <MdChevronRight color="#787878" size={20} />
            </li>
            <li>
              <Link className="Link">service</Link>
              <MdChevronRight color="#787878" size={20} />
            </li>
            <li>
              <Link className="Link">Contact</Link>
              <MdChevronRight color="#787878" size={20} />
            </li>
            <li>
              <Link className="Link">our career</Link>
              <MdChevronRight color="#787878" size={20} />
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 mb-1 p-3 socials-sm">
            <div className="logo-Link">
              {" "}
              <FaFacebookF />
            </div>
            <div className="logo-Link">
              {" "}
              <IoLogoTwitter />
            </div>
            <div className="logo-Link">
              <IoLogoGoogleplus />
            </div>
            <div className="logo-Link">
              <BiLogoPinterest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
