import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'

import skeleton from '@/directives/skeleton'

const stories = storiesOf('Skeleton', module)

stories.addCodeExampleStory(
  'Skeleton form',
  () => ({
    directives: { skeleton },
    template: `
    <Form class="form-demo">
      <div v-skeleton="pending">
        <Select block placeholder="Title" :options="options" required></Select>
      </div>
      <div v-skeleton="pending">
        <Input name="username" type="text" placeholder="username" required block></Input>
      </div>

      <div v-skeleton="pending">
        <InputPassword  placeholder="InputPassword" required/>
      </div>
      <div v-skeleton="pending">
        <Input type="phone" placeholder="phone" required block></Input>
      </div>
      <div v-skeleton="pending">
        <Input type="houseNumber" placeholder="house number" required block></Input>
      </div>

      <div v-skeleton="pending">
        <Button @click="submit" color="primary" block> Submit </Button>
      </div>

    </Form>`,
    data() {
      return {
        options: [{ value: 'Mr', label: 'Mr' }, { value: 'Mrs', label: 'Mrs' }],
      }
    },
    props: {
      pending: {
        default: boolean('Enable', true)
      },
    },
    methods: {
      submit() {},
    },
  })
)
