import React from 'react'

import styles from "./Projects.module.css"

import Hero from './Content/Hero'
import Footer from '../../components/Footer'
import Catalog from './Content/Catalog'

const Projects = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Catalog />
      <Footer />
    </div>
  )
}

export default Projects