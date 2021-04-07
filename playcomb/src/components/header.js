import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"

const Header = ({ headerBg }) => (
  <header>
    <div
      className={headerStyles.container}
      style={{ background: headerBg || "red" }}
    >
      <div className={headerStyles.tocContainer}>
        <img src="logo.png" alt="logo" />
        <nav>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>
              <Link to="/the-model">The Model</Link>
            </li>
            <li className={headerStyles.listItem}>
              <Link to="/our-systems">Our Systems</Link>
            </li>
            <li className={headerStyles.listItem}>
              <Link to="/the-process">The Process</Link>
            </li>
            <li className={headerStyles.listItem}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div />
      </div>
    </div>
  </header>
)

export default Header
