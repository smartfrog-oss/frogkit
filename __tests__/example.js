import { mount } from 'vue-test-utils'
import Example from '@/components/example'

describe('Example component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(Example)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
