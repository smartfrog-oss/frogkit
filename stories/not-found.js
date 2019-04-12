import { storiesOf } from '@storybook/vue'
import NotFound from '@/components/not-found'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('404 not found', module)

stories.addCodeExampleStory('Kitchen Sink', () => ({
  template: `<NotFound :title="title" :content="content" :button="button" />`,
  props: {
      title: {
        default: text('title', 'Ein Fehler ist aufgetreten')
      },
      content: {
        default: text('content', 'Es tut uns leid, wir konnten die angeforderte Seite nicht finden.<br>Bitte die Internetadresse (URL) auf Fehler überprüfen.')
      },
      button: {
        default: text('button', 'Zur Startseite')
      }
  }
}), NotFound)
