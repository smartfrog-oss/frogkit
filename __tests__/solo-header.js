import { mount } from 'vue-test-utils'
import Soloheader from '@/components/solo-header'

describe('Soloheader component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Soloheader, {
      context: {
        props: {
          logoUrl: '/'
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
