import { mount } from 'vue-test-utils'
import Spinner from '@/components/spinner'


describe('Spinner component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Spinner, {
      context: {
        props: {
          fullscreen: true
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
