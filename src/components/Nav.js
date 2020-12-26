import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import NavStyles from "./Nav.module.scss";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav>
      <div>
        <div className={NavStyles.logo}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
      </div>
      <div className={NavStyles.linkList}>
        <ul>
          <li>
            <Link activeClassName={NavStyles.active} to="/">الرئيسية</Link>
          </li>
          <li>
            <Link activeClassName={NavStyles.active} to="/blog">المدونة</Link>
          </li>
          <li>
            <Link activeClassName={NavStyles.active} to="/services">الخدمات</Link>
          </li>
          <li>
            <Link activeClassName={NavStyles.active} to="/tags">Tags</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
