import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'

import Carousel from '@/components/carousel'



const stories = storiesOf('Carousel', module)

stories.addCodeExampleStory('kitchen sink', () => ({
  template: `
  <Grid>
  <Row>
    <Col xs12 sm6 md4 style="background: blue">
      <Carousel :slides="slides" :active="active" :loop="loop" />
    </Col>
  </Row>
  </Grid>
  `,
  // methods: {
  //   action: action('button-click')
  // },
  props: {
    active: {
      default: number('Active', 0, {min: 0, max: 3, step: 1 })
    },
    loop: {
      default: boolean('Loop', false)
    }, 
    length: {
      default: number('Slides', 3, {range: true, min: 1, max: 7, step: 1 })
    },
  },
  computed:{
    slides() {
      return Array.from({length: this.length}).map((_,i) => ({file: `https://unsplash.it/320?random&${i}`}) )
    }
  }
}), Carousel)

stories.addCodeExampleStory('Product page', () => ({
  template: `
  <Grid>
  <Row>
    <Col xs12 sm6 md4 style="background: blue">
      <Carousel :slides="slides" />
    </Col>
  </Row>
  </Grid>
  `,
  data() {
    return {
      slides: Array.from({length: 3}).map((_,i) => ({file: `https://s3-eu-west-1.amazonaws.com/cdn.smartfrog.com/design/shop/camera_picts/sf_cam${i+1}%402x.jpg`}))
    }
  },
}), Carousel)
