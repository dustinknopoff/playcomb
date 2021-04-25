import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./carousellist.module.css"

const CarouselList = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges

  return nodes.map(({ node }) => {
    const { fields, frontmatter } = node
    const { poster, alt } = frontmatter
    const { slug } = fields
    return (
      <Link to={slug} activeClassName={styles.active}>
        <img async defer src={poster} alt={alt} />
      </Link>
    )
  })
}

export default CarouselList
