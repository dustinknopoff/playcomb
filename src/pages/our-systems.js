import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./our-systems.module.css"

import Layout from "../components/layout"

const OurSystems = () => (
  <Layout>
    <div className={"full"}>
      <div className={"left"}>
        <h2>
          Modularity and multiplicity for <i>flexibility</i>
        </h2>
        <hr />
        <p>
          This island serves to be where parents look out onto the rest of the
          playgrounds. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sun
        </p>
      </div>
      <div className={"right"}>
        <img alt="picture of swing land" />
      </div>
    </div>
    <div className={"full"}>
      <video alt="playcomb video" />
    </div>
    <div className={"full"}>
      <h2 className={styles.overlapH2}>The Guiding Hand Principle</h2>
      <img alt="treehouse island" />
      <p>
        This island serves to be where parents look out onto the rest of the
        playgrounds. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sun t in culpa qui
        officia deserunt mollit anim id est laborum. incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum. incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitati
      </p>
    </div>
  </Layout>
)

export default OurSystems
