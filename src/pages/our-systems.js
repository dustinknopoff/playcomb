import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./our-systems.module.css"

import Layout from "../components/layout"

const OurSystems = () => (
  <Layout>
    <div className={"full"}>
      <div className={"left"} style={{ margin: "20px" }}>
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
      <div className={"right"} style={{ margin: "20px" }}>
        <img
          src="https://assets.playcomb.space/file/playcomb/Swingland.png"
          alt="picture of swing land"
        />
      </div>
    </div>
    <div className={"full"}>
      <video alt="playcomb video" />
    </div>
    <div className={"full"}>
      <div className="left">
        <h2 className={styles.overlapH2}>The Guiding Hand Principle</h2>
        <hr />
      </div>
      <div className="right">
        <p>
          Kids are chaos. They are are incredibly difficult to regulate,
          especially on rules about physical self-control. But the beauty of
          design is its subtle intentionality. We don’t have try quite as hard
          to enforce certain physical space rule following in a space, if we
          have control of how to create the space. The ‘Guiding Hand Principle’
          is our philosophy for keeping kids appropriately separated by letting
          the flow of the space create natural separation. The space itself, not
          authority figures or arbitrary rules, will set up the majority of the
          rules.
        </p>
      </div>
    </div>
  </Layout>
)

export default OurSystems
