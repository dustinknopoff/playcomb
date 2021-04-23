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
        A key distinguishing factor of our playground from others is its flexibility 
        to work during COVID or post-COVID, in a small middle-of-the-city park or a large 
        empty space in the suburbs. To accomplish this flexibility, we’ve designed our 
        playground with modularity in mind. Our playground is a collection of “islands” 
        that can be configured and re-configured as desired on a hexogonal grid. Coupled 
        with this idea of modularity, and intended to keep kids separated, is our other key 
        design principle of multiplicity. By making the same experience available in 
        multiple places, kids can share experiences from a safe distance, and not feel 
        the need to crowd into the only space available for an activity there is to do. 
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
      <div className="left2">
        <h2>The Guiding Hand Principle</h2>
        <hr />
      </div>
      <div className="middle" style={{ marginTop: "20%"}}>
        <img src="https://assets.playcomb.space/file/playcomb/Parentisland.png" />
      </div>
      <div className="right2" style={{ marginTop: "20%"}}>
        <p style={{ width: "80%" }}>
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
