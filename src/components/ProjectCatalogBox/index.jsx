import React, { useState } from 'react'
import styles from "./ProjectCatalogBox.module.css";
import Grid from '../Grid';

const ProjectCatalogBox = ({
  text,
  subText,
  imgSrc,
  tagText,
  tagTextColor,
  link
}) => {

  const [hover, setHover] = useState(false);

  return (
    <div className={styles.container}>
      <Grid noGutters gap="0">
        <Grid.Item clg="1 / span 6">
          <div>
            <span className={styles.tag} style={{ color: tagTextColor }}>{tagText}</span>
            <div className={styles.infoBox}>
              <h5 className={styles.h5}>
                {text}
              </h5>
              <p className={styles.p}>{subText}</p>
              <a 
                href={link}
                target='_blank'
                className={styles.link} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={hover ? { color: tagTextColor } : {}}
              >Discover</a>
            </div>
          </div>
        </Grid.Item>
        <Grid.Item clg="7 / span 6" >
          <img className={styles.image} src={imgSrc} />
        </Grid.Item>
      </Grid>
    </div>
  )
}

export default ProjectCatalogBox