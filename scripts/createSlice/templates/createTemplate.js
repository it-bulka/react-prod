const fs = require('fs/promises')
const resolveRoot = require('../resolveRoot')
const createModel = require('./createModel')
const createUI = require('./createUI')
const createPublicApi = require('./createPublicApi')
const firstCharUpperCase = require('../firstCharUpperCase')


module.exports = async (layer, sliceName)  => {
  try {
    await fs.mkdir(resolveRoot('src', layer, firstCharUpperCase(sliceName)))
  } catch (e) {
    console.error(`Can not create directory for slice ${sliceName}`)
  }

  await createModel(layer, sliceName)
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName)
}