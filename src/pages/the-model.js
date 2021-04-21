import * as React from "react"

import Layout from "../components/layout"
import * as styles from "./themodel.module.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "@google/model-viewer"
import { Link, graphql } from "gatsby"
import CarouselList from "../components/carousel_list"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const TheModel = ({ data }) => {
  const [slide, setSlide] = React.useState(null)
  const [isMoving, setMoving] = React.useState(false)
  const carouselList = CarouselList({ data })

  const activate = (e, num) => {
    if (isMoving) {
      e.preventDefault()
    } else {
      console.log("firing at setting a state val")
      setSlide(num)
    }
  }

  return (
    <Layout>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass={styles.carouselItem}
        beforeChange={() => setMoving(true)}
        afterChange={() => setMoving(false)}
      >
        {carouselList}
      </Carousel>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            poster
            alt
          }
        }
      }
    }
  }
`

export default TheModel
