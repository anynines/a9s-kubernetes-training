import React from 'react'
import { Divider, Grid, Typography } from '@anynines/a9s-design-system'

const Video = ({ src, title, size, faded }) => {
  let klass
  if (faded) klass = 'fadedVideo'
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
          marginBottom: 4
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
      <Typography variant='subtitle2'>{title}</Typography>
    </Grid>
  )
}

export default function VideoContainer({ title, list }) {
  let size, faded
  switch (list.length) {
    case 1:
      size = { lg: 12, sm: 12 }
      faded = false
      break
    case 2:
      size = { lg: 6, sm: 12 }
      faded = false
      break
    case 3:
      size = { lg: 4, sm: 12 }
      faded = true
      break
    default:
      size = { lg: 3, sm: 12 }
      faded = true
  }

  const videos = list.map((video, i) => (
    <Video
      key={i}
      size={size}
      faded={faded}
      src={video.src}
      title={video.title}
    ></Video>
  ))
  return (
    <div>
      <Typography gutterBottom variant='h4'>
        {title}
      </Typography>
      <Grid container spacing={4}>
        {videos}
      </Grid>
      <Divider style={{ padding: '1.8em 0' }}> </Divider>
    </div>
  )
}

VideoContainer.isMDXComponent = true
