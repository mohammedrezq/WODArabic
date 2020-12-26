import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
// import contactStyles from "./contact.module.scss";

const ContactPage = () => {
  return (
    <>
      <SEO title="تواصل معنا" />
      <Layout>
        <div className="outer">
          <h1>تواصل معنا</h1>
          <p>تواصل معنا على الايميل او عن طريق تويتر</p>
          <div>
            <p>
              If you have any questions please don't hesitate to contact me via
              Email:{" "}
              <a href="mailto:mohammedrezq2000@gmail.com">
                mohammedrezq2000@gmail.com
              </a>
              , <br />
              or on Twitter{" "}
              <a href="https://www.twitter.com/mohammedrezq2">
                @mohammedrezq2
              </a>{" "}
              I would be happy to talk to you.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
