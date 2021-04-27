import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Header = ({ headerBgs, scrollAction }) => (
  <header>
    <div className={headerStyles.container}>
      <div className={headerStyles.tocContainer}>
        <Link to="/">
          <img
            src="https://assets.playcomb.space/file/playcomb/logo.png"
            alt="logo"
          />
        </Link>
        <nav>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>
              <Link to="/arrival-house" activeClassName={headerStyles.active}>
                The Models
              </Link>
            </li>
            <li className={headerStyles.listItem}>
              <Link to="/our-systems" activeClassName={headerStyles.active}>
                Our System
              </Link>
            </li>
            <li className={headerStyles.listItem}>
              <a href="https://process.playcomb.space">The Process</a>
            </li>
            <li className={headerStyles.listItem}>
              <Link to="/about" activeClassName={headerStyles.active}>
                About
              </Link>
            </li>
          </ul>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            itemClass={headerStyles.carouselItem}
            className="carousel"
          >
            {headerBgs.map(img => (
              <img
                src={img}
                width="100vw"
                height="100vw"
                style={{ height: "100vh" }}
              />
            ))}
          </Carousel>
        </nav>
        <div />
      </div>
      {typeof window !== "undefined" && window.location.search.length > 0 && (<svg
        width="48"
        height="87"
        viewBox="0 0 48 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={headerStyles.downArrow}
        onClick={scrollAction}
      >
        <rect
          x="0.485527"
          y="0.485527"
          width="46.6106"
          height="85.4528"
          rx="23.3053"
          stroke="white"
          strokeWidth="0.971054"
        />
        <path
          d="M23.8754 72.2589C24.0969 72.4803 24.4559 72.4803 24.6773 72.2589L28.2855 68.6507C28.5069 68.4293 28.5069 68.0703 28.2855 67.8489C28.0641 67.6275 27.7051 67.6275 27.4836 67.8489L24.2764 71.0562L21.0691 67.8489C20.8477 67.6275 20.4887 67.6275 20.2673 67.8489C20.0458 68.0703 20.0458 68.4293 20.2673 68.6507L23.8754 72.2589ZM23.7094 13.5947L23.7094 71.858L24.8433 71.858L24.8433 13.5947L23.7094 13.5947Z"
          fill="white"
        />
      </svg>)}
    </div>
  </header>
)

export default Header
