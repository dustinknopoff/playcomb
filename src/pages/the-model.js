import * as React from "react"

import Layout from "../components/layout"
import * as styles from "./themodel.module.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "@google/model-viewer"

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

const TheModel = () => {
  const [slide, setSlide] = React.useState(null)
  const [isMoving, setMoving] = React.useState(false)

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
      <p>Placeholder for carousel of 3D Models</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass={styles.carouselItem}
        beforeChange={() => setMoving(true)}
        afterChange={() => setMoving(false)}
      >
        <img src="./download 1.png" onClick={e => activate(e, 1)} />
        <img src="./download 1.png" onClick={e => activate(e, 1)} />
        <img src="./download 1.png" onClick={e => activate(e, 1)} />
        <img src="./download 1.png" onClick={e => activate(e, 1)} />
        <img src="./download 1.png" onClick={e => activate(e, 1)} />
      </Carousel>
      <model-viewer
        id="reveal"
        loading="eager"
        camera-controls
        auto-rotate
        src="https://assets.playcomb.space/file/playcomb/Swing+Land.glb"
        alt="A 3D model of a shishkebab"
        ar
      ></model-viewer>
    </Layout>
  )
}

export default TheModel
