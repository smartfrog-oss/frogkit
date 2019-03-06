import {
  mount,
  shallow
} from 'vue-test-utils'

import MarketingPopup from '@/components/marketing-popup'

const propsData = {
  visible: true,
  config: {
    title: 'Sorry!',
    image: true,
    headline: 'Due to high demand, our expected delivery time is currently 8 - 12 business days.',
    label: 'Voucher:',
    code: 'Sorry19',
    accept: 'Continue',
    reject: 'Later'
  }

}

describe('Coupon Popup component', () => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(MarketingPopup, {
      propsData
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should emit change event when close method is called', () => {
    const cmp = shallow(MarketingPopup, {
      propsData
    })
    const stub = jest.fn()
    cmp.vm.$on('change', stub)
    cmp.vm.close()
    expect(stub).toBeCalled()
  })

  it('Should emit proceed event when proceed method is called', () => {
    const cmp = shallow(MarketingPopup, {
      propsData
    })
    const stub = jest.fn()
    cmp.vm.$on('proceed', stub)
    cmp.vm.proceed()
    expect(stub).toBeCalled()
  })
})