
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'

const stories = storiesOf('Dialogue', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `
    <Dialogue v-model="visible" :dark="dark" :requireAction="requireAction">
      <h1 class="demo-title">Hello</h1>
    </Dialogue>
  `,
  props: {
      visible: {
        default: boolean('Visible', true)
      },
      dark: {
        default: boolean('Dark', true)
      },
      requireAction: {
        default: boolean('Require Action', false)
      }
  }
}), Dialogue)
