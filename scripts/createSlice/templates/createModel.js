const fs = require('fs/promises')
const resolveRoot = require('../resolveRoot')
const reduxSliceTemplate = require('./reduxSliceTemplate')
const schemaTypeTemplate = require('./schemaTypeTemplate')

module.exports = async (layer, sliceName) => {
  const resolveModulePath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModulePath())
      await fs.mkdir(resolveModulePath('types'))
      await fs.mkdir(resolveModulePath('slices'))
      await fs.mkdir(resolveModulePath('selectors'))
      await fs.mkdir(resolveModulePath('services'))
    } catch (e) {
      console.error(`Failed to create model segment for slice ${sliceName}`, e)
    }
  }

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModulePath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName)
      )
    } catch (e) {
      console.error(`Failed to create redux slice ${sliceName}`, e)
    }
  }

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModulePath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName)
      )
    } catch (e) {
      console.error(`Failed to create state schema`, e)
    }
  }

  await createModelStructure()
  await createReduxSlice()
  await createSchemaType()
}