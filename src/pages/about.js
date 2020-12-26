import React from "react";
import Layout from "../components/Layout";
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
    <SEO title="عنا" />
    <Layout>
      <div className={`outer`}>
        <h1>عنا</h1>
      </div>
    </Layout>
    </>
  );
};

export default AboutPage;
