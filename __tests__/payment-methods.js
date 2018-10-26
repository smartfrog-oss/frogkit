import { mount } from 'vue-test-utils'
import PaymentMethods from '@/components/payment-methods'

describe('Payment Methods component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(PaymentMethods)
    expect(wrapper.html()).toMatchSnapshot()
  })

})
