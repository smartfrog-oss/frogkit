import { storiesOf } from '@storybook/vue'
import CertificateBadges from '@/components/certificate-badges'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Certificate Badges', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<CertificateBadges :width="width"/>`,
  props: {
    width: {
      default: text('Width', '65px')
    }
  }
}), CertificateBadges)
