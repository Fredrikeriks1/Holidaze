import React from "react";
import Newsletter from "./Newsletter";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footer-col-1">
      <a href="/">
        <div className="footer-img"></div>
        <h1>Holidaze</h1>
      </a>
      <p>
        The purpose of this website is to promote Bergen as a travel
        destination.
      </p>
      <p>© 2021 Holidaze, All rights reserved</p>
      <div className="SoMe">
        <a
          title="Messenger"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.messenger.com/"
        >
          <i className="fab fa-facebook-messenger"></i>
        </a>
        <a
          title="YouTube"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.youtube.com/"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          title="Twitter"
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
    <div className="footer-col-2">
      <div>
        <h4>Contact</h4>
        <NavLink to={"./Contact"}>Contact Us</NavLink>
        <a title="Messenger" href="https://www.messenger.com/">
          Messenger
        </a>
        <a title="E-mail us" href="mailto:post@holidaze.com">
          E-mail
        </a>
        <NavLink to={"./Login"}>Admin Login</NavLink>
        <NavLink to={"./Register"}>Admin Register</NavLink>
      </div>
      <div>
        <h4>Accommodations</h4>
        <NavLink to={"./Accommodations"}>Search</NavLink>
        <NavLink to={"./Accommodations"}>Hotels</NavLink>
        <NavLink to={"./Accommodations"}>Bed and Breakfast</NavLink>
        <NavLink to={"./Accommodations"}>Guesthouses</NavLink>
      </div>
      <div>
        <h4>Follow Us</h4>
        <a
          title="Messenger"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.messenger.com/"
        >
          Facebook
        </a>
        <a
          title="YouTube"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.youtube.com/"
        >
          LinkedIn
        </a>
        <a
          title="Twitter"
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/"
        >
          Twitter
        </a>
      </div>
    </div>

    <div className="footer-col-3">
      <h4>Newsletter</h4>
      <p>Subscribe to our newsletter to get the best deals</p>
      <Newsletter />
    </div>
  </div>
);

export default Footer;
