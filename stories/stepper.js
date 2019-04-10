import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select, number } from '@storybook/addon-knobs'

import Stepper from '@/components/stepper'

const stories = storiesOf('Stepper', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<Stepper :count="count" :active="active" :big="big" />`,
  props: {
    count: {
      default: number('Count', 3, { min: 1, max: 12, step: 1, })
    },
    active: {
      default: number('Active', 2, { min: 1, max: 12, step: 1, })
    },
    big: {
      default: boolean('Big', false)
    }
  }
}))

stories.addCodeExampleStory('Default', () => ({
  template: `<Stepper />`
}))

stories.addCodeExampleStory('Big Status Step', () => ({
  template: `<Stepper big />`
}))
