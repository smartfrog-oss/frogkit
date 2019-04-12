import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, number, boolean } from '@storybook/addon-knobs'

import Grid from '@/components/grid'


const stories = storiesOf('Layout / Grid System', module)

stories.addCodeExampleStory('kitchen Sink', () => {
  return {
    template: `
    <Grid :fluid="fluid">
      <Row><Col v-bind="getBreakPoint(12)"><div class="demo"> 12 </div></Col></Row>
      <Row><Col v-bind="getBreakPoint(6)" v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
      <Row><Col v-bind="getBreakPoint(4)" v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
      <Row><Col v-bind="getBreakPoint(3)" v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
      <Row><Col v-bind="getBreakPoint(2)" v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
      <Row><Col v-bind="getBreakPoint(1)" v-for="i in 12" :key="i"><div class="demo">1 </div></Col></Row>
    </Grid>
    `,
    props: {
      fluid: {
        default: boolean('Fluid', false)
      },
      bp: {
        default: select('min breaking-point', ['xs', 'sm', 'md', 'lg', 'xl'], 'xs')
      }
    },
    methods: {
      getBreakPoint(size) {
        const key = `${this.bp}${size}`
        const props = {}
        props[key] = true
        return props
      }
    }
  }
}, Grid)

stories.addCodeExampleStory('Fill space', () => {
const n = number('size', 1, {
   range: true,
   min: 1,
   max: 12,
   step: 1,
})
  return {
    template: `
    <Grid>
      <Row>
        <Col v-bind="getSize()" ><div class="demo">{{n}} </div></Col>
        <Col><div class="demo"> fillspace </div></Col>
        <Col v-bind="getSize()" ><div class="demo">{{n}} </div></Col>
      </Row>
    </Grid>
    `,
    props: {
      n: {
        default:  number('size', 1, {
          range: true,
          min: 1,
          max: 12,
          step: 1,
       })
      }
    },
    methods: {
      getSize() {
        const key = `xs${this.n}`
        const props = {}
        props[key] = true
        return props
      }
    }
  }
})

stories.addCodeExampleStory('Extra small', () => ({
  template: `
  <Grid>
    <Row><Col xs12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))

stories.addCodeExampleStory('Small', () => ({
  template: `
  <Grid>
    <Row><Col xs12 sm12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs12 sm6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs12 sm4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs12 sm3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs12 sm2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs12 sm1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))

stories.addCodeExampleStory('Medium', () => ({
  template: `
  <Grid>
    <Row><Col xs12 md12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs12 md6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs12 md4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs12 md3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs12 md2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs12 md1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))

stories.addCodeExampleStory('Large', () => ({
  template: `
  <Grid>
    <Row><Col xs12 lg12><div class="demo"> 12 </div></Col></Row>
    <Row><Col xs12 lg6 v-for="i in 2" :key="i"><div class="demo"> 6 </div></Col></Row>
    <Row><Col xs12 lg4 v-for="i in 3" :key="i"><div class="demo"> 4 </div></Col></Row>
    <Row><Col xs12 lg3 v-for="i in 4" :key="i"><div class="demo"> 3 </div></Col></Row>
    <Row><Col xs12 lg2 v-for="i in 6" :key="i"><div class="demo"> 2 </div></Col></Row>
    <Row><Col xs12 lg1 v-for="i in 12" :key="i"><div class="demo"> 1 </div></Col></Row>
  </Grid>
  `
}))
