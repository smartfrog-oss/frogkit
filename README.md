# frogkit

Smartfrog UI Components Library

[![npm version](https://badge.fury.io/js/%40smartfrog%2Ffrogkit.svg)](https://badge.fury.io/js/%40smartfrog%2Ffrogkit)
[![Build Status](https://api.travis-ci.org/smartfrog-oss/frogkit.svg?branch=development)](https://travis-ci.org/smartfrog-oss/frogkit#)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/smartfrog-oss/frogkit#semantic-release)

![https://github.com/smartfrog-oss/frogkit](logo.png)



## Installation

using yarn

```bash
yarn add @smartfrog/frogkit
```

using npm

```bash
npm i -S @smartfrog/frogkit
```

## Usage
component are availabale under `src/component` folder


### use a global component 
```js
import button from '@smartfrog/frogkit/src/components/button'

Vue.component(button.name, button)
```

### use a component when it's needed
```js
import button from '@smartfrog/frogkit/src/components/button'

export default {
    name: 'Example',
    components: { button },
  }
```

## icons

1. place SVG files inside `src/assets/icons`
> NOTE: make sure that the SVG file contain viewBox attribute

2. run `yarn icon`
the script will optimise the SVG and generate an icon component for it

## social icons

1. place a social icon SVG file inside `src/assets/social/base`

2. run `yarn social-icon`
the script will update the social icons sprite (image and css) adding the new one

## Contribution

1. Fork the repo

2. install dependencies

```bash
yarn
```

3. Start the storybook

```bash
yarn storybook
```

4. Build component

5. Add Story for it

6. Cover it with test

7. Make sure that the test is passing

```bash
yarn test
```

8. Open a PR!

## Semantic Release

We use semantic release now to control the version and to publish to npm registry. <br>
According to the commit message we decide what the next version would be. <br>
Please check the following table: <br>

| Commit message |   Update  |
|----------------|:---------:|
| feat           | **Major** |
| fix            | **Minor** |
| docs           | **Patch** |
| style          | **Patch** |
| refactor       | **Minor** |
| perf           | **Patch** |
| test           | **Patch** |
| build          | **Patch** |
| ci             | **Patch** |
| chore          | **Patch** |
| revert         | **Minor** |



**Happy Coding!**
