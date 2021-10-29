import React from 'react'
import { Divider, Grid } from '@anynines/a9s-design-system'
import Video from './Video.js'

export default function VideoContainer({ title, list }) {
  let size, faded
  switch (list.length) {
    case 1:
      size = { lg: 4, sm: 12 }
      faded = true
      break
    case 2:
      size = { lg: 4, sm: 12 }
      faded = true
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
    <div style={{ paddingTop: 10, paddingBottom: '1.8em' }}>
      <Grid container spacing={4}>
        {videos}
      </Grid>
      <Divider style={{ paddingTop: '1.8em' }} variant='fullWidth'></Divider>
    </div>
  )
}

VideoContainer.isMDXComponent = true
