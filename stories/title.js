import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, number, boolean } from '@storybook/addon-knobs'
import Title from '@/components/title'

const stories = storiesOf('Title', module)


stories.add('kitchen sink', () => ({
  template: `<Title :size="size" :color="color" :weight="weight" :center="center">
              {{slot}}
            </Title>`,
  props: {
    slot: {
      default: text('Text', 'Lorem ipsum dolorem')
    },
    size: {
      default: select('Size', ['larger', 'xx-small', '100px', '8px', 'xl', 'lg', 'md', 'sm', 'xs'], 'md')
    },
    color: {
      default: select('Color', ['default', 'primary', 'light', 'secondary'], 'primary')
    },
    weight: {
      default: select('Weight', ['default', 'bold', 'slim'])
    },
    center: {
      default: boolean('Center', false)
    }
  }
}), Title)

stories.add('Custom size (type number)', () => ({
  template: `<Title :size="size" :color="color" :weight="weight">
              {{slot}}
            </Title>`,
  props: {
    slot: {
      default: text('Text', 'Lorem ipsum dolorem')
    },
    size: {
      default: number('Size', 1)
    },
    color: {
      default: select('Color', ['default', 'primary', 'light'], 'primary')
    },
    weight: {
      default: select('Weight', ['default', 'bold', 'slim'])
    }
  }
}))
