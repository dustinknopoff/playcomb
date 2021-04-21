/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ headerBgs, children }) => {
  const mainRef = React.useRef()

  React.useEffect(() => {
    mainRef.current.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <React.Fragment>
      <Header
        headerBgs={headerBgs || ["https://assets.playcomb.space/file/playcomb/Arrival+House1.png"]}
        scrollAction={() =>
          mainRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <main ref={mainRef}>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerBg: PropTypes.oneOf([PropTypes.any]),
}

export default Layout
