const Config = require('webpack-chain')


const webpackConfig = new Config()

const isProd = process.env.NODE_ENV === 'production'

const sourceMap = !isProd
const localIdentName = isProd ? '[hash:base64]' : '[name]--[local][hash:base64:3]'

function createCSSRule(lang, test, loader, options) {
  const baseRule = webpackConfig.module.rule(lang).test(test)

  // rules for <style lang="module">
  const vueModulesRule = baseRule.oneOf('vue-modules').resourceQuery(/module/)
  applyLoaders(vueModulesRule, true)

  // rules for <style>
  const vueNormalRule = baseRule.oneOf('vue').resourceQuery(/\?vue/)
  applyLoaders(vueNormalRule, false)

  // rules for normal CSS imports
  const normalRule = baseRule.oneOf('normal')
  applyLoaders(normalRule, false)

  function applyLoaders(rule, modules) {
      rule
        .use('vue-style-loader')
        .loader('vue-style-loader')
        .options({
          sourceMap
        })

    const cssLoaderOptions = { sourceMap, importLoaders: 2 }

    if (modules) {
      Object.assign(cssLoaderOptions, {
        modules,
        localIdentName
      })
    }

    rule
      .use('css-loader')
      .loader('css-loader')
      .options(cssLoaderOptions)

    if (loader) {
      rule
        .use(loader)
        .loader(loader)
        .options(Object.assign({ sourceMap }, options))
    }
  }
}

createCSSRule('stylus', /\.styl(us)?$/, 'stylus-loader', {
  preferPathResolver: 'webpack',
  'resolve url': true
})

module.exports = webpackConfig.toConfig().module.rules
