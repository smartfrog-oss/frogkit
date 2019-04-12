const path = require('path')
const srcPath = path.resolve(__dirname, '../src')
const demoPath = path.resolve(__dirname, '../demo')
const cssLoaderConfig = require('./webpack.css')

// Export a function. Accept the base config as the only param.
module.exports = async ({config}) => {
  
  config.module.rules.push(...cssLoaderConfig)
  config.resolve.extensions.push('.vue'),
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': srcPath,
    '@demo': demoPath,
  }
  // Return the altered config
  return config;
};
