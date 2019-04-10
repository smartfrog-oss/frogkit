import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Input from '@/components/input'

const stories = storiesOf('Input', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template:
  `<div>
    <Input v-model="inputValue" :type="inputType" :size="size" :blackList="[blackList]" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
    <h1 class="demo-title">Value: {{inputValue}}</h1>
  </div>`,
  props: {
    inputValue: {
      default: text('Text', 'tada')
    },
    inputType: {
      default: select('Input Type', ['text', 'email', 'phone', 'password', 'ukZip'], 'text')
    },
    size: {
      default: select('Size', ['normal', 'small'], 'normal')
    },
    cutSide: {
      default: select('Cut border', ['default', 'left', 'right'], 'default')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    block: {
      default: boolean('Block', false)
    },
    required: {
      default: boolean('Required', false)
    },
    placeholderText: {
      default: text('Placeholder', 'Username')
    },
    blackList: {
      default: text('blacklist', 'ta')
    }
  }
}), Input)

stories.addCodeExampleStory('Type Password', () => ({
  template:
  `<div>
    <Input v-model="inputValue" type="password" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
  </div>`,
  data() {
    return {
      inputValue: '',
    }
  },
  props: {
    size: {
      default: select('Size', ['normal', 'small'], 'normal')
    },
    cutSide: {
      default: select('Cut border', ['default', 'left', 'right'], 'default')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    block: {
      default: boolean('Block', false)
    },
    required: {
      default: boolean('Required', false)
    },
    placeholderText: {
      default: text('Placeholder', 'Password')
    }
  }
}))

stories.addCodeExampleStory('Type Phone Number', () => ({
  template:
  `<div>
    <Input v-model="inputValue" type="phone" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
  </div>`,
  data() {
    return {
      inputValue: ''
    }
  },
  props: {
    size: {
      default: select('Size', ['normal', 'small'], 'normal')
    },
    cutSide: {
      default: select('Cut border', ['default', 'left', 'right'], 'default')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    block: {
      default: boolean('Block', false)
    },
    required: {
      default: boolean('Required', false)
    },
    placeholderText: {
      default: text('Placeholder', 'Phone Number')
    }
  }
}))

stories.addCodeExampleStory('Type Email', () => ({
  template:
  `<div>
    <Input v-model="inputValue" type="email" :size="size" :cutSide="cutSide" :block="block" :placeholder="placeholderText" :disabled="disabled" :required="required"></Input>
  </div>`,
  data() {
    return {
      inputValue: ''
    }
  },
  props: {
    size: {
      default: select('Size', ['normal', 'small'], 'normal')
    },
    cutSide: {
      default: select('Cut border', ['default', 'left', 'right'], 'default')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
    block: {
      default: boolean('Block', false)
    },
    required: {
      default: boolean('Required', false)
    },
    placeholderText: {
      default: text('Placeholder', 'Email')
    }
  }
}))
