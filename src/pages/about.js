import * as React from "react"
import HexImage from "../components/heximage"

import Layout from "../components/layout"
import * as styles from "./about.module.css"

const About = () => (
  <Layout>
    <img
      src="https://assets.playcomb.space/file/playcomb/logo.png"
      alt="playcomb logo"
      className={styles.logo}
    />
    <div className="full">
      <div class="left">
        <div class={styles.gallery}>
          <img
            class={styles.even}
            src="https://assets.playcomb.space/file/playcomb/Arrival+House1.png"
          />
          <img
            class={styles.odd}
            src="https://assets.playcomb.space/file/playcomb/IMG_1546.jpeg"
          />
          <img
            class={styles.odd}
            src="https://assets.playcomb.space/file/playcomb/Treehouse2-2.png"
          />
          <img
            class={styles.even}
            src="https://assets.playcomb.space/file/playcomb/TARZAN.png"
          />
        </div>
      </div>
      <div class="right">
        <h3>
          <i>An adventure through nature</i>
        </h3>
        <hr />
        <p>
          The COVID-19 pandemic has been tough on all people. Our team
          recognizes that it’s been especially tough on kids. Socialization is a
          key aspect of child development, much of which happens on the
          playground. A lot of this is being missed out on because COVID safety
          is currently too difficult to accomplish on playgrounds. Our Adventure
          Through Nature aims to provide a refreshing and practical playground
          experience for kids of all ages by providing a space full of discovery
          and excitement that upholds social distancing as a key value. This
          entails designing a cohesive system of play 'features' which, on their
          own, engage imaginations and promote physical exercise; and as a
          whole, foster a natural separation of families.
        </p>
      </div>
    </div>
    <div className="full">
      <div className="left">
        <h3>Our Team</h3>
        <hr />
        <p style={{ width: "80%" }}>
          The team behind Playcomb has a broad set of skills set across the design and technical spectrum.
          Together we've brought to life the spark of "What would a playground made for COVID times look like?" and turned it into this!
        </p>
      </div>
      <div class={styles.right}>
        <div className={styles.profile}>
          <HexImage
            text={"Dustin"}
            url={"https://assets.playcomb.space/file/playcomb/Dustin.jpg"}
          />
          <p className={styles.caption}>
            Dustin Knopoff
            <br />
            <i>Computer Science and Design</i>
          </p>
        </div>
        <div className={styles.profile}>
          <HexImage
            text={"Sophia"}
            url={"https://assets.playcomb.space/file/playcomb/Sophia.jpg"}
          />
          <p className={styles.caption}>
            Sophia Ke <br />
            <i>Experience Design</i>
          </p>
        </div>
        <div className={styles.profile}>
          <HexImage
            text={"Katherine"}
            url={"https://assets.playcomb.space/file/playcomb/Katherine.png"}
          />
          <p className={styles.caption}>
            Katherine Dong <br />
            <i>Interaction Design</i>
          </p>
        </div>
        <div className={styles.profile}>
          <HexImage
            text={"Austin"}
            url={"https://assets.playcomb.space/file/playcomb/Austin.jpg"}
          />

          <p className={styles.caption}>
            Austin Kim
            <br />
            <i>Computer Science and Design</i>
          </p>
        </div>
        <div className={styles.profile}>
          <HexImage
            text={"Karli"}
            url={"https://assets.playcomb.space/file/playcomb/Karli.jpg"}
          />
          <p className={styles.caption}>
            Karli Young <br />
            <i>Computer Science and Design</i>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
