import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'

const stories = storiesOf('Typography (deprecated)', module)


stories.add('kitchen sink', () => ({
  template: `<FkText :size="size" :color="color" :weight="weight">
              {{slot}}
            </FkText>`,
  props: {
    slot: {
      default: text('Text', 'Lorem ipsum dolorem sit amet aliquando')
    },
    size: {
      default: select('Size', ['xl', 'lg', 'md', 'sm', 'xs'], 'md')
    },
    color: {
      default: select('Color', ['default', 'primary', 'light'], 'default')
    },
    weight: {
      default: select('Weight', ['default', 'bold', 'slim'])
    }
  }
}))
