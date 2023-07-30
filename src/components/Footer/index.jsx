import React, { useContext } from 'react'

import Logo from '../Logo';
import Grid from '../Grid';
import List from '../List';

import styles from "./Footer.module.css";
import { BreakpointContext } from '../../context/breakpoint';

const links = {
  1: {
    links: ["Products", "Website", "Web applications", "Crypto"],
    mx: {
      lg: "1 / span 4",
      md: "1 / span 4",
      sm: "1 / span 6",
    }
  },
  2 : {
    links: ["</>", "UX/UI", "API and SDK", "Start-Ups"],
    mx: {
      lg: "5 / span 4",
      md: "5 / span 4",
      sm: "7 / span 6"
    }
  },
  3: {
    links: ["Legal", "Méntions Légales", "CGV", "CGU"],
    mx: {
      lg: "9 / span 4",
      md: "9 / span 4",
      sm: "1 / span 12"
    }
  }
}

const Footer = () => {

  const { activeBreakPoint } = useContext(BreakpointContext);

  const isMobile = ["sm", "xs"].includes(activeBreakPoint);

  return (
    <footer className={styles.container}>
      <Grid extendStyle={styles.gridContainer}>
        <Grid.Item 
          clg="1 / span 6"
          cmd="1 / span 6"
          cxs="1 / span 12"
          csm="1 / span 12"
          extendStyle={styles.gridItem}>
          <div className={styles.logoBox}>
            <Logo />
            <p>Lorem Ipsum: Code, Create, Innovate. <br /> The Future of Tech is Here.</p>
          </div>
        </Grid.Item>
        <Grid.Item 
          clg="7 / span 6"
          cmd="7 / span 6"
          cxs="1 / span 12"
          csm="1 / span 12"
        >
          <Grid noGutters >
            {Object.keys(links).map(key => (
              <Grid.Item 
                key={key} 
                clg={links[key].mx.lg}
                cmd={links[key].mx.md}
                csm={links[key].mx.sm}
                cxs={links[key].mx.sm}
                extendStyle={styles.gridList}
              >
                <List>
                  {(links[key].links || []).map((link, index) => (
                    <List.Item key={index}>{link}</List.Item>
                  ))}
                </List>
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>
      </Grid>
      <div className={styles.copyright}>
        <span>Copyright ©2023 Yokr</span>
      </div>
    </footer>
  )
}

export default Footer