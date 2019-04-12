import {
  storiesOf
} from '@storybook/vue'
import {
  action
} from '@storybook/addon-actions'
import {
  text,
  select,
  boolean,
  object
} from '@storybook/addon-knobs'

import Dialogue from '@/components/dialogue'
import CouponPopup from '@/components/coupon-popup'

const stories = storiesOf('Coupon Popup', module)


stories.addCodeExampleStory('Kitchen Sink', () => {
  const title = text('Title', 'Hiergeblieben!')
  const image = select('Image', [require('@demo/popup/gift.svg'), require('@demo/popup/geschenk.svg'), ''], require('@demo/popup/gift.svg'))
  const headline = text('Headline', 'Smartfrog schenkt dir den ersten Monat!')
  const label = text('Voucher label', 'Gutscheincode:')
  const code = text('Voucher code', 'FREE1')
  const accept = text('Accept Label', 'Jetzt einlösen')
  const reject = text('Reject Label', 'Jetzt nicht')
  return {
    template: `
      <CouponPopup v-model="visible" :config="config" />
    `,
    props: {
      visible: {
        default: boolean('Visible', true)
      },
      config: {
        default: object('default', {
          title,
          image,
          headline,
          label,
          code,
          accept,
          reject
        })
      }
    }
  }
}, CouponPopup)