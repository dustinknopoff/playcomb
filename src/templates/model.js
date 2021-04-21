import * as React from "react"

import Layout from "../components/layout"
import * as styles from "../pages/themodel.module.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "@google/model-viewer"
import { Link, graphql } from "gatsby"
import getCarouselList from "../components/carousel_list"

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
  let carouselList = getCarouselList({ data })
  const id = carouselList.findIndex(n => {
    return n.props.to === data.markdownRemark.fields.slug
  })
  carouselList = array_move(carouselList, id, 3)
  const carousel = React.useRef()

  React.useEffect(() => {
    setTimeout(() => {
      carousel.current.goToSlide(0, false)
    }, 1000)
  }, [carousel.current?.state.domLoaded])

  return (
    <Layout>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        itemClass={styles.carouselItem}
        ref={carousel}
        centerMode={true}
        afterChange={prev => console.log(prev)}
      >
        {carouselList}
      </Carousel>
      <h2>{data.markdownRemark.frontmatter.name}</h2>
      <p>{data.markdownRemark.frontmatter.numHex} Hexagons</p>
      <hr />
      <model-viewer
        id="reveal"
        loading="eager"
        camera-controls
        auto-rotate
        src={data.markdownRemark.frontmatter.glb}
        ios-src={data.markdownRemark.frontmatter.usdz}
        alt={data.markdownRemark.frontmatter.alt}
        bounds="tight"
        scale={data.markdownRemark.frontmatter.scale}
        ar
      ></model-viewer>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        name
        usdz
        glb
        numHex
        scale
      }
    }
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

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr // for testing
}
