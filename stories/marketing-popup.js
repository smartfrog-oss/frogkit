import {
  storiesOf
} from '@storybook/vue'

import {
  text,
  boolean
} from '@storybook/addon-knobs'

import MarketingPopup from '@/components/marketing-popup'

const stories = storiesOf('Marketing Popup', module)


stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `
    <MarketingPopup v-model="visible" :config="config" />
  `,
  data() {
    return {
      visible: boolean('Visible', true),
      config: {
        title: text('Title', 'Sorry!'),
        image: boolean('Image', false),
        headline: text('Headline', 'Due to high demand, our expected delivery time is currently 8 - 12 business days.'),
        label: text('Voucher label', ''),
        code: text('Voucher code', ''),
        accept: text('Accept Label', 'Continue'),
        reject: text('Reject Label', ''),
      }
    }
  }
}), MarketingPopup)