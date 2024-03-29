const { pascalize } = require('humps')
const fs = require('fs')
const glob = require('glob')

const iconsBasePath = 'src/Components/UI-Kit/Icons'

const iconsSvgBasePath = `${iconsBasePath}/svg`
const iconsComponentsBasePath = `${iconsBasePath}/iconComponents`
if (!fs.existsSync(iconsComponentsBasePath)) {
  fs.mkdirSync(iconsComponentsBasePath, {
    recursive: true
  })
}
const filenames = glob.sync(`${iconsSvgBasePath}/**/*.svg`)

glob.sync(`${iconsSvgBasePath}/**/*.js?`).forEach(filename => fs.unlink(filename, () => { }))

const components = []
const componentGroups = []

for (const filename of filenames) {
  const baseFilename = filename.substr(iconsSvgBasePath.length + 1)
  const pieces = baseFilename.replace(/\.svg/, '').split(/\//)

  if (pieces.length === 0) {
    console.warn(`Icon name '${baseFilename}' doesn't match naming convention`)
    continue
  }

  const componentName = pieces.reverse().map(piece => pascalize(piece)).join('') + 'Icon'
  const componentFilename = `${iconsComponentsBasePath}/${componentName}.js`

  components.push(componentName)
  componentGroups.push(componentName)

  fs.writeFile(
    componentFilename,
`// DO NOT EDIT THIS FILE. This file auto-generated, use \`npm run sync-icons\` to update icons\n
import ${componentName} from '../svg/${baseFilename}'\n
export default ${componentName}
`,
() => { }
  )
}
