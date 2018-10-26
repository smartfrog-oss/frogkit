import { mount } from 'vue-test-utils'
import InformationAccordion from '@/components/information-accordion'

describe('Information Accordion component', () => {

  it('should render component and match snapshot', () => {
    const wrapper = mount(InformationAccordion, {propsData: {title: 'some title goes here'}})
    expect(wrapper.html()).toMatchSnapshot()
  })

})
