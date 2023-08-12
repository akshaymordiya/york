import React, { Fragment, useContext } from 'react'
import styles from "./Catalog.module.css"
import SectionIntroBox from '../../../../components/SectionIntroBox'
import Grid from '../../../../components/Grid'
import ProjectCatalogBox from '../../../../components/ProjectCatalogBox'
import { BreakpointContext } from '../../../../context/breakpoint'

const Catalog = () => {

  const { clientX } = useContext(BreakpointContext);

  const canWrap = clientX < 800;

  return (
    <SectionIntroBox
      title="Portfolio"
      subTitle="Our projects"
      extendStyle={styles.section}
      extendWrapperStyle={styles.introText}
    >
      <Grid noGutters gap={'0.5rem'} extendStyle={styles.gridBox}>
        <Grid.Item
          clg="1 / span 6"
          cmd="1 / span 6"
          csm={canWrap ? "1 / span 12" : "1 / span 6"}
          cxs="1 / span 12"
        >
          <ProjectCatalogBox 
            link="#"
            text="Writer"
            subText={(
              <Fragment>
                A wordpress <br />
                AI post writer.
              </Fragment>
            )}
            tagText="Plugin"
            tagTextColor="#0029FF"
            imgSrc="/catalog/ct01.png"
          />
        </Grid.Item>
        <Grid.Item
          clg="7 / span 6"
          cmd="7 / span 6"
          csm={canWrap ? "1 / span 12" : "7 / span 6"}
          cxs="1 / span 12"
        >
          <ProjectCatalogBox
            link="http://giftl.io/"
            text="GIFTL"
            subText={(
              <Fragment>
                Gift smarter, not harder.
              </Fragment>
            )}
            tagText="Web App"
            tagTextColor="#A851FF"
            imgSrc="/catalog/ct02.png"
          />
        </Grid.Item>
        <Grid.Item
          clg="1 / span 6"
          cmd="1 / span 6"
          csm={canWrap ? "1 / span 12" : "1 / span 6"}
          cxs="1 / span 12"
        >
          <ProjectCatalogBox
            link="#"
            text="WP AI"
            subText={(
              <Fragment>
                Embed OpenAI <br />
                on Wordpress.
              </Fragment>
            )}
            tagText="Plugin"
            tagTextColor="#0029FF"
            imgSrc="/catalog/ct03.png"
          />
        </Grid.Item>
        <Grid.Item
          clg="7 / span 6"
          cmd="7 / span 6"
          csm={canWrap ? "1 / span 12" : "7 / span 6"}
          cxs="1 / span 12"
        >
          <ProjectCatalogBox
            link="http://brandlist.ai/"
            text="BRANDLIST"
            subText={(
              <Fragment>
                Find a unique <br />
                business name.
              </Fragment>
            )}
            tagText="Web App"
            tagTextColor="#A851FF"
            imgSrc="/catalog/ct04.png"
          />
        </Grid.Item>
      </Grid>
    </SectionIntroBox>
  )
}

export default Catalog