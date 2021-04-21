import * as React from "react"

import * as styles from "./heximage.module.css"

const HexImage = ({ text, url }) => {
  return <img src={url} className={styles.hexBorder} />
}

export default HexImage
