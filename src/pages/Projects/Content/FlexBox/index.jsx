import React, { Fragment } from 'react'
import styles from "./FlexBox.module.css";
import Stack from '../../../../components/Stack';
import Intro from '../../../../components/Intro';
import Button from '../../../../components/Button';
import Grid from '../../../../components/Grid';

const FlexBox = ({
  direction = "column",
  title,
  subTitle,
  imgSrc,
  buttonStyle,
  buttonText,
  buttonSpanText,
  attachedTextWithImage = false
}) => {
  let renderStack = (
    <Fragment>
      <Grid noGutters gap="0rem" >
        <Grid.Item 
          clg="1 / span 4"
          cmd="1 / span 6"
          csm="1 / span 6"
          cxs="1 / span 6"
          extendStyle={styles.noGutters}
        >
          <img className={styles.image} src={imgSrc} />
        </Grid.Item>
        <Grid.Item
          clg="7 / span 8"
          cmd="7 / span 6"
          csm="7 / span 6"
          cxs="7 / span 6"
          extendStyle={styles.noGutters}
        >
          <Intro
            title={title}
            subTitle={subTitle}
            extendWrapperStyle={styles.textWrapper}
            extendTitleStyle={styles.title}
            extendSubTitleStyle={styles.subTitle}
          />
        </Grid.Item>
      </Grid>
      <Button extendStyle={`${styles.button} ${buttonStyle}`}>{`${buttonText} `}<span>{buttonSpanText}</span>.</Button>
    </Fragment>
  )

  if(attachedTextWithImage){
    renderStack = (
      <Fragment>
        <Intro
          title={title}
          subTitle={subTitle}
          extendWrapperStyle={`${styles.textWrapper} ${styles.removeXGutter}`}
          extendTitleStyle={styles.title}
          extendSubTitleStyle={styles.subTitle}
        />
        <Stack 
          padding="0" 
          direction="row"
          positionX="spaceBX"
          positionY="endY"
          extendStyle={styles.stack}
        >
          <img src={imgSrc} />
          <Button extendStyle={`${styles.button} ${buttonStyle}`}>{`${buttonText} `}<span>{buttonSpanText}</span>.</Button>
        </Stack>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Stack padding="0" direction={direction}>
        {renderStack}
      </Stack>
    </Fragment>
  )
}

export default FlexBox