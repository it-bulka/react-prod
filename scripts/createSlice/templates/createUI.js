const fs = require('fs/promises')
const resolveRoot = require('../resolveRoot')
const firstCharUpperCase = require('../firstCharUpperCase')
const componentTemplate = require('./componentTemplate')
const storyTemplate = require('./storyTemplate')
const styleTemplate = require('./styleTemplate')

module.exports = async (layer, sliceName) => {
  const resolveUiPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUiPath())
    } catch (e) {
      console.error(`Failed to create UI directory for slice ${sliceName}`, e)
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)
      await fs.mkdir(resolveUiPath(componentName))

      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName),
      );
      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      )
    } catch (e) {
      console.error('Failed to create component')
    }
  }

  await createUIDir()
  await createComponent()
}