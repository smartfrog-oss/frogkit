import { configure, addDecorator, setAddon, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { themes } from '@storybook/theming';
import pkg from '../package.json'


addParameters({
  options: {
    name: `Frogkit ${pkg.version}`,
    url: 'https://github.com/smartfrog-oss/frogkit',
    theme: themes.dark
  },
});

addDecorator(withKnobs)

import Vue from 'vue'
import '../src/stylus/main.styl'
import '../src/stylus/utils.styl'
import '../demo/demo.styl'

// import and register all vue component inside components folder
const req = require.context('../src/components', false, /^\.\/.*\.vue$/)
req.keys().forEach(filename => {
  const component = req(filename).default
  Vue.component(component.name, component)
})

function loadStories() {
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(req)
}

import { ComponentInfoDecorator } from './decorators'

setAddon({
  addCodeExampleStory(storyName, storyFn, component) {
    const decorator = () => ComponentInfoDecorator(storyFn, component)
    this.add(`${storyName} ⚡`, storyFn, {decorators: [decorator]})
  }
})

configure(loadStories, module)
