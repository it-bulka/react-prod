import { Project, ExportDeclaration, ImportDeclaration } from 'ts-morph'

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
  return layers.some(layer => value.startsWith(layer))
}

const updateImportExportDeclaration = (declaration: ExportDeclaration | ImportDeclaration) => {
  const value = declaration.getModuleSpecifierValue()

  if (value && isAbsolute(value)) {
    declaration.setModuleSpecifier(`@/${value}`)
  }
}

const updateImports = async () => {
  const project = new Project({})
  project.addSourceFilesAtPaths(['src/**/*.tsx', 'src/**/*.ts'])

  const files = project.getSourceFiles()

  files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations()
    // for index re-export
    const exportDeclarations = sourceFile.getExportDeclarations()

    importDeclarations.forEach(updateImportExportDeclaration)
    exportDeclarations.forEach(updateImportExportDeclaration)
  })

  console.log('Saving project...') // eslint-disable-line no-console
  project.saveSync()
  console.log('Project saved!') // eslint-disable-line no-console
}

updateImports()
  .then(() => console.log('Successfully updated imports.')) // eslint-disable-line no-console
  .catch(() => console.error('Failed updating imports.')) // eslint-disable-line no-console
