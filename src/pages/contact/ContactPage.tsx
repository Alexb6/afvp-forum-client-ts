import React from "react";
import { ReactComponent as Email } from "./../../assetsSrc/icons/arroba.svg";
import { ReactComponent as Blog } from "./../../assetsSrc/icons/blogger.svg";
import AFVP_Data from "./../../config/AFVP_Data";

import ContactForm from "./ContactForm";

import "./../../css/styles.css";

const { title, address, zipCode, town, country, email } = AFVP_Data;

const ContactPage = () => (
  <div className="contactpage">
    <div className="contact-titlebar container-fluid">
      <h1 className="titlebar-title container">Contacts</h1>
    </div>
    <div className="contact-section container">
      <div className="row contact-row">
        <div className="contact-details col-md-6 col-sm-12 mb-3">
          <h2 className="details-title">Contactez-nous</h2>
          <div className="details-location">
            <div className="location-address">
              <span className="association-title">
                <b>{title}</b>
              </span>
              <span>{address}</span>
              <span>
                {zipCode} {town}, {country}
              </span>
            </div>
          </div>
          <div className="details-email">
            <Email />
            <a href="mailto:contact@afvp.net">
              <b>{email}</b>
            </a>
          </div>
          <div className="details-blog">
            <Blog />
            <a
              href={process.env.REACT_APP_BLOG_ORIGIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Visitez notre blog</b>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactPage;
