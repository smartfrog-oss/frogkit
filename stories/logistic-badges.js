import { storiesOf } from '@storybook/vue'
import LogisticBadges from '@/components/logistic-badges'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Logistic Badges', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<LogisticBadges :width="width"/>`,
  props: {
    width: {
      default: text('Width', '142px')
    }
  }
}), LogisticBadges)
