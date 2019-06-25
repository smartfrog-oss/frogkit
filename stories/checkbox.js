import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, boolean, select } from '@storybook/addon-knobs'

import Checkbox from '@/components/checkbox'


const stories = storiesOf('Checkbox', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<div>
              <Checkbox :value="value" :disabled="disabled" v-model="selectedValue" :required="required">
                {{slot}}
              </Checkbox>
              <h1 class="demo-title">Model: {{selectedValue}}</h1>
            </div>`,
  data () {
    return {
      selectedValue: false
    }
  },
  props: {
    disabled: {
      default: boolean('Disabled', true)
    },
    required: {
      default: boolean('Required', true)
    },
    value: {
      default: text('value', 'accepted')
    },
    slot: {
      default: text('Text', 'I accept terms of use')
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Default Binding', () => ({
  template: `<Checkbox v-model="selectedValue">
                {{selectedValue}}
              </Checkbox>`,
  data() {
    return {
      selectedValue: false
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Value Binding', () => ({
  template: `<Checkbox :value="value" v-model="selectedValue">
                {{selectedValue}}
              </Checkbox>`,
  data() {
    return {
      selectedValue: ''
    }
  },
  props: {
    value: {
      default: text('Value', 'selected')
    }
  }
}), Checkbox)

stories.addCodeExampleStory('Binding other value ', () => ({
  template: `<Checkbox :true-value="trueValue" :false-value="falseValue" v-model="selectedValue">
                {{selectedValue}}
              </Checkbox>`,
  data() {
    return {
      selectedValue: 'Yep'
    }
  },
  props: {
    trueValue: {
      default: text('True Value', 'Yep')
    },
    falseValue: {
      default: text('False Value', 'Nope')
    }
  }
}), Checkbox)
