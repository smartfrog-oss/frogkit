import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Button from '@/components/button'

import icons from '@/components/icons'
const iconsList = Object.keys(icons)

const stories = storiesOf('Button', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<Button @click="action" :link="link" :disabled="disabled" :capitalize="capitalize" :size="size" :loading="loading" :cut-side="cutSide" :block="block" :outline="outline" :color="color">
    {{slot}}
  </Button>`,
  methods: { action: action('button-click') },
  props: {
      slot: {
        default: text('Text', 'click me')
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      block: {
        default: boolean('Full Width', false)
      },
      outline: {
        default: boolean('Outline', false)
      },
      loading: {
        default: boolean('Loading', false)
      },
      link: {
        default: boolean('Link', false)
      },
      capitalize: {
        default: boolean('Capitalize', false)
      },
      size: {
        default: select('Size', ['small', 'normal', 'big'], 'normal')
      },
      color: {
        default: select('Color', ['default', 'primary', 'secondary'], 'default')
      },
      cutSide: {
        default: select('Cut border', ['', 'left', 'right'], '')
      }
  }
}), Button)


stories.addCodeExampleStory('Link as a button', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :capitalize="capitalize" :loading="loading" :outline="outline" :cut-side="cutSide" :color="color" :href="href" target="_blank">
              {{slot}}
            </Button>`,
  props: {
    slot: {
      default: text('Text', 'Jetzt bestellen')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    block: {
      default: boolean('Full Width', false)
    },
    outline: {
      default: boolean('Outline', false)
    },
    loading: {
      default: boolean('Loading', false)
    },
    capitalize: {
      default: boolean('Capitalize', false)
    },
    href: {
      default: text('href', '//smartfrog.com')
    },
    size: {
      default: select('Size', ['small', 'normal', 'big'], 'normal')
    },
    color: {
      default: select('Color', ['default', 'primary', 'secondary'], 'primary')
    },
    cutSide: {
      default: select('Cut border', ['', 'left', 'right'], '')
    }
  }
}))

stories.addCodeExampleStory('Button with icon on the left', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :capitalize="capitalize" :loading="loading" :cut-side="cutSide" :outline="outline" :color="color">
              <Icon :icon="icon" :size="size"/>
              <span>{{slot}}</span>
            </Button>`,
  props: {
    icon: {
      default: select('Icon', iconsList, 'print')
    },
    slot: {
      default: text('Text', 'Jetzt bestellen')
    },
    disabled: { 
      default: boolean('Disabled', false)
    },
    block: { 
      default: boolean('Full Width', false)
    },
    outline: {
      default: boolean('Outline', false)
    },
    loading: {
      default: boolean('Loading', false)
    },
    capitalize: {
      default: boolean('Capitalize', false)
    },
    size: {
      default: select('Size', ['small', 'normal', 'big'], 'normal')
    },
    color: {
      default: select('Color', ['default', 'primary', 'secondary'], 'primary')
    },
    cutSide: {
      default: select('Cut border', ['', 'left', 'right'], '')
  }
  }
}))

stories.addCodeExampleStory('Button with icon on the right', () => ({
  template: `<Button link :disabled="disabled" :size="size" :block="block" :capitalize="capitalize" :loading="loading" :cut-side="cutSide" :outline="outline" :color="color">
              <span>{{slot}}</span>
              <Icon :icon="icon" />
            </Button>`,
  props: {
    icon: {
      default: select('Icon', iconsList, 'print')
    },
    slot: {
      default: text('Text', 'Jetzt bestellen')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    block: {
      default: boolean('Full Width', false)
    },
    outline: {
      default: boolean('Outline', false)
    },
    loading: {
      default: boolean('Loading', false)
    },
    capitalize: {
      default: boolean('Capitalize', false)
    },
    size: {
      default: select('Size', ['small', 'normal', 'big'], 'normal')
    },
    color: {
      default: select('Color', ['default', 'primary', 'secondary'], 'primary')
    },
    cutSide: {
      default: select('Cut border', ['', 'left', 'right'], '')
    }
  }
}))
