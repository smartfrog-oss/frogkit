import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import Accordion from '@/components/accordion'

const stories = storiesOf('Accordion', module)


stories.addCodeExampleStory('closed accordion', () => ({
  template: `<Accordion :placeholder="placeholder" :open="false">
                <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
                  <Title size="xs" color="primary">A title from slot.</Title>
                  The Smartfrog Cam can easily be connected with your Wi-Fi using the Smartfrog App. It will then 
                  transmit the recorded videos LIVE to the Smartfrog Cloud using secure bank-level encryption. From here, 
                  you can view the videos at any time using the Smartfrog App on your smartphone, tablet or laptop.
                </DescriptionBlock>

                 <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
                  <ul>
                    <li>Cam management<dd>Use up to 10 Smartfrog Cams at the same time.</dd></li>
                    <li>Data Protection<dd>All data is secured with bank-level encryption.</dd></li>
                  </ul>
                </DescriptionBlock>
            </Accordion>`,
  props: {
    placeholder:  {
      default: text('placeholder', 'Lorem ipsum dolorem')
    }
  }
}), Accordion)

stories.addCodeExampleStory('opened accordion', () => ({
  template: `<Accordion :placeholder="placeholder" :open="true">
                <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
                  <Title size="xs" color="primary">A title from slot.</Title>
                  The Smartfrog Cam can easily be connected with your Wi-Fi using the Smartfrog App. It will then 
                  transmit the recorded videos LIVE to the Smartfrog Cloud using secure bank-level encryption. From here, 
                  you can view the videos at any time using the Smartfrog App on your smartphone, tablet or laptop.
                </DescriptionBlock>

                 <DescriptionBlock class="m-b-30" title="Smartfrog HD Cam">
                  <ul>
                    <li>Cam management<dd>Use up to 10 Smartfrog Cams at the same time.</dd></li>
                    <li>Data Protection<dd>All data is secured with bank-level encryption.</dd></li>
                  </ul>
                </DescriptionBlock>
            </Accordion>`,
  props: {
    placeholder:  {
      default: text('placeholder', 'Lorem ipsum dolorem')
    }
  }
}), Accordion)
