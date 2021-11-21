import React from "react";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";
import Newsletter from "../layout/Newsletter";

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Holidaze</title>
      </Helmet>
      <div className="contact">
        <div className="contact__bg"></div>
        <div className="SoMe-container">
          <i className="fas fa-paper-plane"></i>
          <a
            title="E-mail"
            target={"_blank"}
            rel="noreferrer"
            href="mailto:contact@holidaze.com"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            title="Twitter"
            target={"_blank"}
            rel="noreferrer"
            href="https://twitter.com/"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            title="YouTube"
            target={"_blank"}
            rel="noreferrer"
            href="https://youtube.com/"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            title="Facebook Messenger"
            target={"_blank"}
            rel="noreferrer"
            href="https://www.messenger.com/"
          >
            <i className="fab fa-facebook-messenger"></i>
          </a>
          <Newsletter />
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
