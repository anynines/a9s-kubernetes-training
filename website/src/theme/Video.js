import React from 'react'
import { Grid, Typography } from '@anynines/a9s-design-system'

export default function Video({ src, title, size, faded }) {
  let klass
  if (faded) {
    klass = 'fadedVideo'
  } else {
    title = null
  }
  return (
    <Grid item lg={size.lg} sm={size.sm} xs={12}>
      <div
        style={{
          paddingBottom: '56.25%',
          paddingTop: '0',
          position: 'relative',
          height: '0',
          borderRadius: 4,
          overflow: 'hidden',
          marginBottom: 14
        }}
      >
        <iframe
          className={klass}
          style={{
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            position: 'absolute'
          }}
          width='320'
          src={src + '?rel=0&modestbranding=1&playsinline=0&controls=2'}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <Typography fontWeight='800' variant='subtitle2'>
        {title}
      </Typography>
    </Grid>
  )
}
