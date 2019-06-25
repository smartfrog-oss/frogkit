import { mount } from 'vue-test-utils'
import ResponsiveInputNumber from '@/components/responsive-input-number'

describe('InputNumber component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(ResponsiveInputNumber, { propsData: { ariaLabel: 'quantity' } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
